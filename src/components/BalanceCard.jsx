import React from 'react'
import { StyledCard, TransactionAmount, TransactionContainer, TransactionTypeText } from './styles/BalanceCard.styled'

function BalanceCard() {
    return (
        <StyledCard>
            <TransactionContainer>
                <TransactionTypeText>INCOME</TransactionTypeText>
                <TransactionAmount color='#5cb85c'>$1,500.00</TransactionAmount>
            </TransactionContainer>
            <TransactionContainer>
                <TransactionTypeText>EXPENSES</TransactionTypeText>
                <TransactionAmount color='#d9534f'>$500.00</TransactionAmount>
            </TransactionContainer>
        </StyledCard>
    )
}

export default BalanceCard