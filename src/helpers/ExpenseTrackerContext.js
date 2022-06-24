import { createContext, useState } from "react";

const ExpenseContext = createContext(null)

export const ExpenseProvider = ({children}) => {

    const [balance, setBalance] = useState(0)
    const [currentIncome, setCurrentIncome] = useState(0)
    const [currentExpenses, setCurrentExpenses] = useState(0)
    const [transaction, setTransaction] = useState({})
    const [transactionDetails, setTransactionDetails] = useState('')
    const [isAuth, setIsAuth] = useState(false)

    const value = {
        balance, setBalance,
        currentIncome, setCurrentIncome,
        currentExpenses, setCurrentExpenses,
        transactionDetails, setTransactionDetails,
        transaction, setTransaction,
        isAuth, setIsAuth,
    }

    return (
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContext