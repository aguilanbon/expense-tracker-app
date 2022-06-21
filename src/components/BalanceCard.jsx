import React from 'react'
import { StyledCard, TransactionAmount, TransactionContainer, TransactionTypeText } from './styles/BalanceCard.styled'

function BalanceCard() {
    return (
        <StyledCard>
            <TransactionContainer>
                <TransactionTypeText>INCOME</TransactionTypeText>
                <TransactionAmount color='#519872'>$1,500.00</TransactionAmount>
            </TransactionContainer>
            <TransactionContainer>
                <TransactionTypeText>EXPENSES</TransactionTypeText>
                <TransactionAmount color='#F05454'>$500.00</TransactionAmount>
            </TransactionContainer>
        </StyledCard>
    )
}

export default BalanceCard