import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import ExpenseContext from '../helpers/ExpenseTrackerContext'
import { auth, db } from '../helpers/FirebaseConfig'
import { HistoryH1 } from './styles/History.styled'
import { ButtonContainer, TransactionButton, TransactionContainer, TransactionInput, TransactionLabel } from './styles/Transaction.styled'

function Transactions({ currentUserDetails }) {

    const { currentIncome, currentExpenses, setBalance, setTotalExpenses, setTransactionDetails, transactionDetails, setTransaction, balance } = useContext(ExpenseContext)

    const [transactionAmount, setTransactionAmount] = useState('')

    const addIncome = async () => {
        // setTotalIncome(prevAmount => prevAmount + parseFloat(transactionAmount))
        // setBalance(prevAmount => prevAmount + parseFloat(transactionAmount))
        setTransaction({
            title: transactionDetails,
            amount: transactionAmount,
            user: auth.currentUser.uid
        })

        const transactionCollection = collection(db, 'transactions')
        await addDoc(transactionCollection, {
            details: transactionDetails,
            amount: transactionAmount,
            user: auth.currentUser.uid
        })

        let newBalance = balance + parseFloat(transactionAmount)
        let newIncome = currentIncome + parseFloat(transactionAmount)
        setBalance(newBalance)

        console.log(parseFloat(transactionAmount))

        const userRef = doc(db, 'users', currentUserDetails.id)
        await updateDoc(userRef, {
            balance: parseFloat(newBalance),
            totalIncome: parseFloat(newIncome)
        })

        setTransactionAmount('')
        setTransactionDetails('')
    }

    const addExpense = () => {
        // setTotalExpenses(prevAmount => prevAmount + parseFloat(transactionAmount))
        // setBalance(prevAmount => prevAmount - parseFloat(transactionAmount))
        // setTransaction({
        //     title: transactionDetails,
        //     amount: transactionAmount
        // })
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