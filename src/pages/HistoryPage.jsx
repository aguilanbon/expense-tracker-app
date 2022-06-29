import { collection, endBefore, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { HistoryCardContainer, HistoryH1, HistoryTextContainer, TextAmount, TextDate, TextTransaction } from '../components/styles/History.styled'
import { BackLink, HistoryPageContainer, PageButton, PageButtonContainer } from '../components/styles/HistoryPage.styled'
import { auth, db } from '../helpers/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function HistoryPage() {

    const navigate = useNavigate()
    const [userTransactions, setUserTransactions] = useState([])
    const [lastVisible, setLastVisible] = useState([])
    const [pageError, setPageError] = useState('')
    const [pageCounter, setPageCounter] = useState(1)

    const transactionCollection = collection(db, 'transactions')

    const nextPageAction = async () => {
        try {
            const nextQuery = query(transactionCollection, where('user', '==', auth.currentUser.uid), orderBy('createdAt', 'desc'), startAfter(lastVisible), limit(5))
            const nextDocs = await getDocs(nextQuery)
            setLastVisible(nextDocs.docs[nextDocs.docs.length - 1])
            setUserTransactions(nextDocs.docs.map(item => ({ ...item.data(), id: item.id })))
            setPageCounter(prev => prev + 1)
        } catch (error) {
            setPageError('no more')
        }
    }

    const prevPageAction = async () => {
        try {
            const prevQuery = query(transactionCollection, where('user', '==', auth.currentUser.uid), orderBy('createdAt', 'desc'), endBefore(userTransactions.length - 1), limit(5))
            const prevDocs = await getDocs(prevQuery)
            setLastVisible(prevDocs.docs[prevDocs.docs.length - 1])
            setUserTransactions(prevDocs.docs.map(item => ({ ...item.data(), id: item.id })))
            setPageCounter(prev => prev - 1)
        } catch (error) {

        }
    }

    const getUserTransactions = async () => {
        if (auth.currentUser === null) return
        const q = query(transactionCollection, where('user', '==', auth.currentUser.uid), orderBy('createdAt', 'desc'), limit(5))
        const firstDocs = await getDocs(q)
        setUserTransactions(firstDocs.docs.map(item => ({ ...item.data(), id: item.id })))
        setLastVisible(firstDocs.docs[firstDocs.docs.length - 1])
    }

    useEffect(() => {
        getUserTransactions()
    }, [])

    useEffect(() => {
        if (auth.currentUser === null) {
            toast.error(`Ooops! You're not allowed to go there`, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
            navigate('/')
        }
    })

    return (
        <HistoryPageContainer>
            {pageError === '' ? '' : <p>{pageError}</p>}
            <BackLink to='/home'>{'< '}Go back</BackLink>
            <HistoryH1>Your Transaction History</HistoryH1>
            {userTransactions.map(item => (
                <HistoryCardContainer key={item.id} color={item.isIncome === true ? '#5cb85c' : '#d9534f'}>
                    <HistoryTextContainer>
                        <TextTransaction>{item.details}</TextTransaction>
                        <TextDate>{item.createdAt.toDate().toLocaleDateString() || ''}</TextDate>
                    </HistoryTextContainer>
                    <TextAmount>{item.isIncome ? '+ ' : '- '}${item.amount}</TextAmount>
                </HistoryCardContainer>
            ))}
            {pageError}
            <PageButtonContainer>
                {pageCounter === 1 ? '' : <PageButton onClick={() => prevPageAction()}> prev </PageButton>}
                {userTransactions.length < 5 ? '' : <PageButton onClick={() => nextPageAction()}> next </PageButton>}
            </PageButtonContainer>
        </HistoryPageContainer>
    )
}


export default HistoryPage