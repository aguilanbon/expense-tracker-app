import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { HistoryCardContainer, HistoryH1, HistoryTextContainer, TextAmount, TextDate, TextTransaction } from '../components/styles/History.styled'
import { BackLink, HistoryPageContainer } from '../components/styles/HistoryPage.styled'
import { auth, db } from '../helpers/FirebaseConfig'
import { useNavigate } from 'react-router-dom'

function HistoryPage() {

    const navigate = useNavigate()
    const [userTransactions, setUserTransactions] = useState([])

    useEffect(() => {
        const transactionCollection = collection(db, 'transactions')
        const getUserTransactions = async () => {
            if (auth.currentUser === null) return
            const q = query(transactionCollection, where('user', '==', auth.currentUser.uid), orderBy('createdAt', 'desc'))
            const response = await getDocs(q)
            setUserTransactions(response.docs.map(item => ({ ...item.data(), id: item.id })))
        }
        getUserTransactions()
    }, [])

    useEffect(() => {
        if (auth.currentUser === null) {
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
        </HistoryPageContainer>
    )
}


export default HistoryPage