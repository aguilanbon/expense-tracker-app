import React from 'react'
import { StyledCard, TransactionAmount, TransactionContainer, TransactionTypeText } from './styles/BalanceCard.styled'

function BalanceCard({ currentUserDetails }) {
    return (
        <StyledCard>
            <TransactionContainer>
                <TransactionTypeText>INCOME</TransactionTypeText>
                <TransactionAmount color='#2ebf91'>${currentUserDetails.totalIncome ? parseFloat(currentUserDetails.totalIncome.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '--'}</TransactionAmount>
            </TransactionContainer>
            <TransactionContainer>
                <TransactionTypeText>EXPENSES</TransactionTypeText>
                <TransactionAmount color='#dd3e54'>${currentUserDetails.totalExpenses ? parseFloat(currentUserDetails.totalExpenses.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '--'}</TransactionAmount>
            </TransactionContainer>
        </StyledCard>
    )
}

export default BalanceCard