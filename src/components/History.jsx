import React from 'react'
import { HistoryCardContainer, HistoryContainer, HistoryH1, TextAmount, TextTransaction } from './styles/History.styled'

function History({ userTransactions }) {

    return (
        <HistoryContainer>
            <HistoryH1>History</HistoryH1>
            {userTransactions.map(item => (
                <HistoryCardContainer key={item.id} color={item.isIncome === true ? '#5cb85c' : '#d9534f'}>
                    <TextTransaction>{item.details}</TextTransaction>
                    <TextAmount>${item.amount}</TextAmount>
                </HistoryCardContainer>
            ))}
        </HistoryContainer>
    )
}

export default History