import { collection, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { HistoryCardContainer, HistoryH1, HistoryTextContainer, TextAmount, TextDate, TextTransaction } from '../components/styles/History.styled'
import { BackLink, HistoryPageContainer } from '../components/styles/HistoryPage.styled'
import { auth, db } from '../helpers/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function HistoryPage() {

    const navigate = useNavigate()
    const [userTransactions, setUserTransactions] = useState([])
    const [pageCounter, setPageCounter] = useState(1)
    const [lastVisible, setLastVisible] = useState([])
    const [pageError, setPageError] = useState('')

    const transactionCollection = collection(db, 'transactions')

    const nextPageAction = async () => {
        const nextQuery = query(transactionCollection, orderBy('createdAt', 'desc'), startAfter(lastVisible), limit(5))
        const nextDocs = await getDocs(nextQuery)
        setLastVisible(nextDocs.docs[nextDocs.docs.length - 1])
        setUserTransactions(nextDocs.docs.map(item => ({ ...item.data(), id: item.id })))
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
            toast.error(`Ooops! You're not allowed to go there`)
            navigate('/')
        }
    })

    return (
        <HistoryPageContainer>
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
            <button onClick={() => nextPageAction()}>Next Page</button>
        </HistoryPageContainer>
    )
}


export default HistoryPage