import React from 'react'
import { useContext } from 'react'
import ExpenseContext from '../helpers/ExpenseTrackerContext'
import { StyledCard, TransactionAmount, TransactionContainer, TransactionTypeText } from './styles/BalanceCard.styled'

function BalanceCard() {
    const { totalIncome, totalExpenses } = useContext(ExpenseContext)

    return (
        <StyledCard>
            <TransactionContainer>
                <TransactionTypeText>INCOME</TransactionTypeText>
                <TransactionAmount color='#5cb85c'>{totalIncome}</TransactionAmount>
            </TransactionContainer>
            <TransactionContainer>
                <TransactionTypeText>EXPENSES</TransactionTypeText>
                <TransactionAmount color='#d9534f'>{totalExpenses}</TransactionAmount>
            </TransactionContainer>
        </StyledCard>
    )
}

export default BalanceCard