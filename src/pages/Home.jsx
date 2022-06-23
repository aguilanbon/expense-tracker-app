import { collection, getDocs, query, where } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import BalanceCard from '../components/BalanceCard'
import History from '../components/History'
import { HomeContainer, LeftColumn, RightColumn, TextH2, TextH1 } from '../components/styles/Home.styled'
import Transactions from '../components/Transactions'
import ExpenseContext from '../helpers/ExpenseTrackerContext'
import { auth, db } from '../helpers/FirebaseConfig'

function Home() {

    const { balance } = useContext(ExpenseContext)
    // const [userTransactions, setUserTransactions]

    useEffect(() => {
        const transactionCollection = collection(db, 'transactions')
        const getUserTransactions = async () => {
            const q = query(transactionCollection, where('user', '==', auth.currentUser.uid))

            const response = await getDocs(q)

            response.forEach(item => {
                console.log(item.id, item.data());
            })
        }

        getUserTransactions()
    })

    return (
        <HomeContainer>
            <LeftColumn>
                <TextH2>Your Balance</TextH2>
                <TextH1>${parseFloat(balance).toFixed(2)}</TextH1>
                <BalanceCard />
                <History />
            </LeftColumn>
            <RightColumn>
                <Transactions>

                </Transactions>
            </RightColumn>
        </HomeContainer>
    )
}

export default Home