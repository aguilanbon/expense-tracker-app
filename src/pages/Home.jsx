import React from 'react'
import { useContext } from 'react'
import BalanceCard from '../components/BalanceCard'
import History from '../components/History'
import { HomeContainer, LeftColumn, RightColumn, TextH2, TextH1 } from '../components/styles/Home.styled'
import Transactions from '../components/Transactions'
import ExpenseContext from '../helpers/ExpenseTrackerContext'

function Home() {

    const { balance, setBalance, totalIncome, setTotalIncome, totalExpenses, setTotalExpenses } = useContext(ExpenseContext)

    return (
        <HomeContainer>
            <LeftColumn>
                <TextH2>Your Balance</TextH2>
                <TextH1>{balance}</TextH1>
                <BalanceCard />
                <History />
            </LeftColumn>
            <RightColumn>
                <Transactions setTotalIncome={setTotalIncome} setBalance={setBalance} setTotalExpenses={setTotalExpenses}>

                </Transactions>
            </RightColumn>
        </HomeContainer>
    )
}

export default Home