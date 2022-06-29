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
    const [isClicked, setIsClicked] = useState(false)

    const addIncome = async () => {
        const transactionCollection = collection(db, 'transactions')
        if (transactionDetails.length <= 2) {
            setDetailsError('Details must not be empty or less than 2 characters')
            setIsClicked(false)
        } else {
            setDetailsError('')
        }
        if (transactionAmount <= 0) {
            setAmountError('Amount must be valid')
            setIsClicked(false)
        } else {
            setAmountError('')
        }
        if (transactionDetails.length > 2 && transactionAmount > 0) {
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
            setIsClicked(false)
        }
    }



    const addExpense = async () => {
        const transactionCollection = collection(db, 'transactions')
        if (transactionDetails.length <= 2) {
            setDetailsError('Details must not be empty or less than 2 characters')
            setIsClicked(false)
        } else {
            setDetailsError('')
        }
        if (transactionAmount <= 0) {
            setAmountError('Amount must be valid')
            setIsClicked(false)
        } else {
            setAmountError('')
        }
        if (transactionDetails.length > 2 && transactionAmount > 0) {
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
            setIsClicked(false)
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
                <TransactionButton hv='#23d49c' bg='#2ebf91' color='white' onClick={() => {
                    setIsClicked(true)
                    addIncome()
                }} disabled={isClicked}>Income</TransactionButton>
                <TransactionButton hv='#e12f29' bg='#dd3e54' color='white' onClick={() => {
                    setIsClicked(true)
                    addExpense()
                }} disabled={isClicked}>Expense</TransactionButton>
            </ButtonContainer>
        </TransactionContainer>
    )
}

export default Transactions