import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import ExpenseContext from '../helpers/ExpenseTrackerContext'
import { auth, db } from '../helpers/FirebaseConfig'
import { ButtonContainer, TransactionButton, TransactionContainer, TransactionError, TransactionH1, TransactionInput, TransactionLabel } from './styles/Transaction.styled'

function Transactions({ currentUserDetails }) {

    const { setBalance, setTransactionDetails, transactionDetails } = useContext(ExpenseContext)

    const [transactionAmount, setTransactionAmount] = useState('')
    const [detailsError, setDetailsError] = useState('')
    const [amountError, setAmountError] = useState('')

    const addIncome = async () => {
        const transactionCollection = collection(db, 'transactions')
        if (transactionDetails.length <= 2) {
            setDetailsError('Details must not be empty or less than 2 characters')
        } else {
            if (transactionAmount <= 0) {
                setAmountError('Amount must be valid')
                setDetailsError('')

            } else {
                setDetailsError('')
                setAmountError('')
                await addDoc(transactionCollection, {
                    details: transactionDetails,
                    amount: transactionAmount,
                    isIncome: true,
                    createdAt: serverTimestamp(),
                    user: auth.currentUser.uid
                })

                let newBalance = parseFloat(currentUserDetails.balance) + parseFloat(transactionAmount)
                let newIncome = parseFloat(currentUserDetails.totalIncome) + parseFloat(transactionAmount)
                setBalance(newBalance)

                const userRef = doc(db, 'users', currentUserDetails.id)
                await updateDoc(userRef, {
                    balance: parseFloat(newBalance),
                    totalIncome: parseFloat(newIncome)
                })

                setTransactionAmount('')
                setTransactionDetails('')
            }
        }
    }


    const addExpense = async () => {
        const transactionCollection = collection(db, 'transactions')
        if (transactionDetails.length <= 2) {
            setDetailsError('Details must not be empty or less than 2 characters')
        } else {
            if (transactionAmount <= 0) {
                setAmountError('Amount must be valid')
                setDetailsError('')
            } else {
                setAmountError('')
                setDetailsError('')
                await addDoc(transactionCollection, {
                    details: transactionDetails,
                    amount: transactionAmount,
                    isIncome: false,
                    createdAt: serverTimestamp(),
                    user: auth.currentUser.uid
                })

                let newBalance = parseFloat(currentUserDetails.balance) - parseFloat(transactionAmount)
                let newExpense = parseFloat(currentUserDetails.totalExpenses) + parseFloat(transactionAmount)
                setBalance(newBalance)

                const userRef = doc(db, 'users', currentUserDetails.id)
                await updateDoc(userRef, {
                    balance: parseFloat(newBalance),
                    totalExpenses: parseFloat(newExpense)
                })
                setTransactionAmount('')
                setTransactionDetails('')
            }
        }
    }

    useEffect(() => {

    }, [detailsError, amountError])

    return (
        <TransactionContainer>
            <TransactionH1>Add New Transaction</TransactionH1>
            <TransactionLabel>Details</TransactionLabel>
            <TransactionInput type='text' placeholder='Enter transaction details' value={transactionDetails} onChange={e => setTransactionDetails(e.target.value)}></TransactionInput>
            {detailsError === '' ? '' : <TransactionError>{detailsError}</TransactionError>}
            <TransactionLabel>Amount</TransactionLabel>
            <TransactionInput type='number' placeholder='Enter transaction amount' value={transactionAmount} onChange={e => setTransactionAmount(e.target.value)}></TransactionInput>
            {amountError === '' ? '' : <TransactionError>{amountError}</TransactionError>}
            <ButtonContainer>
                <TransactionButton hv='#58e958' bg='#5cb85c' color='white' onClick={() => addIncome()}>Income</TransactionButton>
                <TransactionButton hv='#e12f29' bg='#d9534f' color='white' onClick={() => addExpense()} >Expense</TransactionButton>
            </ButtonContainer>
        </TransactionContainer>
    )
}

export default Transactions