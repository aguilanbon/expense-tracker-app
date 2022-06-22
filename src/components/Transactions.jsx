import React, { useState } from 'react'
import { useContext } from 'react'
import ExpenseContext from '../helpers/ExpenseTrackerContext'
import { HistoryH1 } from './styles/History.styled'
import { ButtonContainer, TransactionButton, TransactionContainer, TransactionInput, TransactionLabel } from './styles/Transaction.styled'

function Transactions() {

    const { setTotalIncome, setBalance, setTotalExpenses, setTransactionDetails } = useContext(ExpenseContext)

    const [transactionAmount, setTransactionAmount] = useState(0)

    const addIncome = () => {
        setTotalIncome(prevAmount => prevAmount + parseFloat(transactionAmount))
        setBalance(prevAmount => prevAmount + parseFloat(transactionAmount))
        setTransactionAmount(0)
    }

    const addExpense = () => {
        setTotalExpenses(prevAmount => prevAmount + parseFloat(transactionAmount))
        setBalance(prevAmount => prevAmount - parseFloat(transactionAmount))
        setTransactionAmount(0)
    }

    return (
        <TransactionContainer>
            <HistoryH1>Add New Transaction</HistoryH1>
            <TransactionLabel>Details</TransactionLabel>
            <TransactionInput type='text' placeholder='Enter transaction details'></TransactionInput>
            <TransactionLabel>Amount</TransactionLabel>
            <TransactionInput step='any' type='number' placeholder='Enter transaction amount' value={transactionAmount} onChange={e => setTransactionAmount(e.target.value)}></TransactionInput>
            <ButtonContainer>
                <TransactionButton bg='#5cb85c' color='white' onClick={() => addIncome()}>Income</TransactionButton>
                <TransactionButton bg='#d9534f' color='white' onClick={() => addExpense()} >Expense</TransactionButton>
            </ButtonContainer>
        </TransactionContainer>
    )
}

export default Transactions