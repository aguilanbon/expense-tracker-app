import React from 'react'
import { HistoryH1 } from './styles/History.styled'
import { ButtonContainer, TransactionButton, TransactionContainer, TransactionInput, TransactionLabel } from './styles/Transaction.styled'

function Transactions() {
    return (
        <TransactionContainer>
            <HistoryH1>Add New Transaction</HistoryH1>
            <TransactionLabel>Details</TransactionLabel>
            <TransactionInput type='text' placeholder='Enter transaction details'></TransactionInput>
            <TransactionLabel>Amount</TransactionLabel>
            <TransactionInput type='text' placeholder='Enter transaction amount'></TransactionInput>
            <ButtonContainer>
                <TransactionButton bg='#5cb85c' color='white'>Income</TransactionButton>
                <TransactionButton bg='#d9534f' color='white' >Expense</TransactionButton>
            </ButtonContainer>
        </TransactionContainer>
    )
}

export default Transactions