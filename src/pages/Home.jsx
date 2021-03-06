import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BalanceCard from '../components/BalanceCard'
import History from '../components/History'
import { HomeContainer, LeftColumn, RightColumn, TextH2, TextH1, UserBalanceCardContainer } from '../components/styles/Home.styled'
import Transactions from '../components/Transactions'
import User from '../components/User'
import ExpenseContext from '../helpers/ExpenseTrackerContext'
import { auth, db } from '../helpers/FirebaseConfig'
import toast from 'react-hot-toast'

function Home() {

    const { balance, currentUserDetails, setCurrentUserDetails } = useContext(ExpenseContext)
    const [userTransactions, setUserTransactions] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const transactionCollection = collection(db, 'transactions')
        const getUserTransactions = async () => {
            if (auth.currentUser === null) return
            const q = query(transactionCollection, where('user', '==', auth.currentUser.uid), orderBy('createdAt', 'desc'))
            const response = await getDocs(q)
            setUserTransactions(response.docs.map(item => ({ ...item.data(), id: item.id })))
        }
        getUserTransactions()
    }, [balance, currentUserDetails])


    useEffect(() => {
        const userCollection = collection(db, 'users')
        const getUserDetails = async () => {
            if (auth.currentUser === null) return
            const q = query(userCollection, where('id', '==', auth.currentUser.uid))
            const response = await getDocs(q)
            let data = response.docs.map(item => ({ ...item.data(), id: item.id }))
            setCurrentUserDetails(data[0])
        }
        getUserDetails()
    }, [balance, setCurrentUserDetails])

    useEffect(() => {
        if (auth.currentUser === null) {
            navigate('/')
            toast.error(`Ooops! You're not allowed to go there`, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
        }
    }, [navigate])

    return (
        <HomeContainer>
            <LeftColumn>
                <UserBalanceCardContainer>
                    <TextH2>Your Balance</TextH2>
                    <TextH1>${currentUserDetails.balance ? parseFloat(currentUserDetails.balance.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '--'}</TextH1>
                </UserBalanceCardContainer>
                <BalanceCard currentUserDetails={currentUserDetails} />
                <History userTransactions={userTransactions} />
            </LeftColumn>
            <RightColumn>
                <User currentUserDetails={currentUserDetails}></User>
                <Transactions currentUserDetails={currentUserDetails}></Transactions>
            </RightColumn>
        </HomeContainer>
    )
}

export default Home