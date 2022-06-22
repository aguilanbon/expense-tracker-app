import React, { useState } from 'react'
import { HistoryH1 } from './styles/History.styled'
import { ButtonContainer, TransactionButton, TransactionContainer, TransactionInput, TransactionLabel } from './styles/Transaction.styled'

function Transactions({ setTotalIncome, setBalance, setTotalExpenses }) {

    const [transactionAmount, setTransactionAmount] = useState(0)

    const addIncome = () => {
        setTotalIncome(prevAmount => prevAmount + transactionAmount)
        setBalance(prevAmount => prevAmount + transactionAmount)
    }

    const addExpense = () => {
        setTotalExpenses(prevAmount => prevAmount + transactionAmount)
        setBalance(prevAmount => prevAmount - transactionAmount)
    }

    return (
        <TransactionContainer>
            <HistoryH1>Add New Transaction</HistoryH1>
            <TransactionLabel>Details</TransactionLabel>
            <TransactionInput type='text' placeholder='Enter transaction details'></TransactionInput>
            <TransactionLabel>Amount</TransactionLabel>
            <TransactionInput type='text' placeholder='Enter transaction amount' onChange={e => setTransactionAmount(parseInt(e.target.value))}></TransactionInput>
            <ButtonContainer>
                <TransactionButton bg='#5cb85c' color='white' onClick={() => addIncome()}>Income</TransactionButton>
                <TransactionButton bg='#d9534f' color='white' onClick={() => addExpense()} >Expense</TransactionButton>
            </ButtonContainer>
        </TransactionContainer>
    )
}

export default Transactions