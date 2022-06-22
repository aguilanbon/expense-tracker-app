import React, { useState } from 'react'
import { useContext } from 'react'
import ExpenseContext from '../helpers/ExpenseTrackerContext'
import { HistoryH1 } from './styles/History.styled'
import { ButtonContainer, TransactionButton, TransactionContainer, TransactionInput, TransactionLabel } from './styles/Transaction.styled'

function Transactions() {

    const { setTotalIncome, setBalance, setTotalExpenses, setTransactionDetails, transactionDetails, transaction, setTransaction } = useContext(ExpenseContext)

    const [transactionAmount, setTransactionAmount] = useState('')

    const addIncome = () => {
        setTotalIncome(prevAmount => prevAmount + parseFloat(transactionAmount))
        setBalance(prevAmount => prevAmount + parseFloat(transactionAmount))
        setTransaction({
            title: transactionDetails,
            amount: transactionAmount
        })
        setTransactionAmount('')
        setTransactionDetails('')
    }

    const addExpense = () => {
        setTotalExpenses(prevAmount => prevAmount + parseFloat(transactionAmount))
        setBalance(prevAmount => prevAmount - parseFloat(transactionAmount))
        setTransaction({
            title: transactionDetails,
            amount: transactionAmount
        })
        setTransactionAmount('')
        setTransactionDetails('')
    }
    return (
        <TransactionContainer>
            <HistoryH1>Add New Transaction</HistoryH1>
            <TransactionLabel>Details</TransactionLabel>
            <TransactionInput type='text' placeholder='Enter transaction details' value={transactionDetails} onChange={e => setTransactionDetails(e.target.value)}></TransactionInput>
            <TransactionLabel>Amount</TransactionLabel>
            <TransactionInput type='text' placeholder='Enter transaction amount' value={transactionAmount} onChange={e => setTransactionAmount(e.target.value)}></TransactionInput>
            <ButtonContainer>
                <TransactionButton bg='#5cb85c' color='white' onClick={() => addIncome()}>Income</TransactionButton>
                <TransactionButton bg='#d9534f' color='white' onClick={() => addExpense()} >Expense</TransactionButton>
            </ButtonContainer>
        </TransactionContainer>
    )
}

export default Transactions