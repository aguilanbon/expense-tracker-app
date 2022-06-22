import { createContext, useState } from "react";

const ExpenseContext = createContext(null)

export const ExpenseProvider = ({children}) => {

    const [balance, setBalance] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpenses, setTotalExpenses] = useState(0)

    const value = {
        balance, setBalance,
        totalIncome, setTotalIncome,
        totalExpenses, setTotalExpenses
    }

    return (
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContext