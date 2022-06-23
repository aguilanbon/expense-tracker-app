import React, { useContext } from 'react'
import ExpenseContext from '../helpers/ExpenseTrackerContext'
import { HistoryCardContainer, HistoryContainer, HistoryH1, TextAmount, TextTransaction } from './styles/History.styled'

function History({ userTransactions }) {

    const { transaction } = useContext(ExpenseContext)

    return (
        <HistoryContainer>
            <HistoryH1>History</HistoryH1>
            {userTransactions.map(item => (
                <HistoryCardContainer key={item.id} color='#d9534f'>
                    <TextTransaction>{item.details}</TextTransaction>
                    <TextAmount>${item.amount}</TextAmount>
                </HistoryCardContainer>
            ))}
            {/* <HistoryCardContainer color='#5cb85c'>
                <TextTransaction>Salary</TextTransaction>
                <TextAmount>$1000.00</TextAmount>
            </HistoryCardContainer>
            <HistoryCardContainer color='#5cb85c'>
                <TextTransaction>Freelance Project</TextTransaction>
                <TextAmount>$750.00</TextAmount>
            </HistoryCardContainer> */}
        </HistoryContainer>
    )
}

export default History