import React from 'react'
import { StyledCard, TransactionAmount, TransactionContainer, TransactionTypeText } from './styles/BalanceCard.styled'

function BalanceCard({ currentUserDetails }) {
    return (
        <StyledCard>
            <TransactionContainer>
                <TransactionTypeText>INCOME</TransactionTypeText>
                <TransactionAmount color='#5cb85c'>${parseFloat(currentUserDetails.totalIncome).toFixed(2)}</TransactionAmount>
            </TransactionContainer>
            <TransactionContainer>
                <TransactionTypeText>EXPENSES</TransactionTypeText>
                <TransactionAmount color='#d9534f'>${parseFloat(currentUserDetails.totalExpenses).toFixed(2)}</TransactionAmount>
            </TransactionContainer>
        </StyledCard>
    )
}

export default BalanceCard