import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useContext } from 'react'
import ExpenseContext from '../helpers/ExpenseTrackerContext'
import { auth, db } from '../helpers/FirebaseConfig'
import { HistoryH1 } from './styles/History.styled'
import { ButtonContainer, TransactionButton, TransactionContainer, TransactionInput, TransactionLabel } from './styles/Transaction.styled'

function Transactions({ currentUserDetails }) {

    const { currentIncome, setBalance, setTransactionDetails, transactionDetails, balance, currentExpenses } = useContext(ExpenseContext)

    const [transactionAmount, setTransactionAmount] = useState('')

    const addIncome = async () => {
        const transactionCollection = collection(db, 'transactions')
        await addDoc(transactionCollection, {
            details: transactionDetails,
            amount: transactionAmount,
            isIncome: true,
            createdAt: serverTimestamp(),
            user: auth.currentUser.uid
        })

        let newBalance = balance + parseFloat(transactionAmount)
        let newIncome = currentIncome + parseFloat(transactionAmount)
        setBalance(newBalance)

        const userRef = doc(db, 'users', currentUserDetails.id)
        await updateDoc(userRef, {
            balance: parseFloat(newBalance),
            totalIncome: parseFloat(newIncome)
        })

        setTransactionAmount('')
        setTransactionDetails('')
    }

    const addExpense = async () => {
        const transactionCollection = collection(db, 'transactions')
        await addDoc(transactionCollection, {
            details: transactionDetails,
            amount: transactionAmount,
            isIncome: false,
            createdAt: serverTimestamp(),
            user: auth.currentUser.uid
        })

        let newBalance = balance - parseFloat(transactionAmount)
        let newExpense = currentExpenses + parseFloat(transactionAmount)
        setBalance(newBalance)

        const userRef = doc(db, 'users', currentUserDetails.id)
        await updateDoc(userRef, {
            balance: parseFloat(newBalance),
            totalExpenses: parseFloat(newExpense)
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