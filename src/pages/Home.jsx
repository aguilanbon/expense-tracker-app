import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BalanceCard from '../components/BalanceCard'
import History from '../components/History'
import { HomeContainer, LeftColumn, RightColumn, TextH2, TextH1 } from '../components/styles/Home.styled'
import Transactions from '../components/Transactions'
import User from '../components/User'
import ExpenseContext from '../helpers/ExpenseTrackerContext'
import { auth, db } from '../helpers/FirebaseConfig'

function Home() {

    const { balance, setBalance, setCurrentIncome, setCurrentExpenses } = useContext(ExpenseContext)
    const [userTransactions, setUserTransactions] = useState([])
    const [currentUserDetails, setCurrentUserDetails] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        const transactionCollection = collection(db, 'transactions')
        const getUserTransactions = async () => {
            if (auth.currentUser === null) return
            const q = query(transactionCollection, where('user', '==', auth.currentUser.uid), orderBy('createdAt', 'desc'))
            const response = await getDocs(q)
            setUserTransactions(response.docs.map(item => ({ ...item.data(), id: item.id })))
        }
        getUserTransactions()
    }, [balance])

    useEffect(() => {
        const userCollection = collection(db, 'users')
        const getUserDetails = async () => {
            if (auth.currentUser === null) return
            const q = query(userCollection, where('id', '==', auth.currentUser.uid))
            const response = await getDocs(q)
            let data = response.docs.map(item => ({ ...item.data(), id: item.id }))
            setCurrentUserDetails(data[0])
            setBalance(parseFloat(currentUserDetails.balance))
            setCurrentIncome(parseFloat(currentUserDetails.totalIncome))
            setCurrentExpenses(parseFloat(currentUserDetails.totalExpenses))
        }
        getUserDetails()
    }, [balance, currentUserDetails.balance, currentUserDetails.totalExpenses, currentUserDetails.totalIncome, setBalance, setCurrentExpenses, setCurrentIncome])

    useEffect(() => {
        if (auth.currentUser === null) {
            navigate('/')
        }
    })

    return (
        <HomeContainer>
            <LeftColumn>
                <TextH2>Your Balance</TextH2>
                <TextH1>${parseFloat(currentUserDetails.balance).toFixed(2)}</TextH1>
                <BalanceCard currentUserDetails={currentUserDetails} />
                <History userTransactions={userTransactions} />
            </LeftColumn>
            <RightColumn>
                <User></User>
                <Transactions currentUserDetails={currentUserDetails}></Transactions>
            </RightColumn>
        </HomeContainer>
    )
}

export default Home