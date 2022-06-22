import React from 'react'
import { HistoryCardContainer, HistoryContainer, HistoryH1, TextAmount, TextTransaction } from './styles/History.styled'

function History() {
    return (
        <HistoryContainer>
            <HistoryH1>History</HistoryH1>
            <HistoryCardContainer color='#d9534f'>
                <TextTransaction>Books</TextTransaction>
                <TextAmount>$500.00</TextAmount>
            </HistoryCardContainer>
            <HistoryCardContainer color='#5cb85c'>
                <TextTransaction>Salary</TextTransaction>
                <TextAmount>$1000.00</TextAmount>
            </HistoryCardContainer>
            <HistoryCardContainer color='#5cb85c'>
                <TextTransaction>Freelance Project</TextTransaction>
                <TextAmount>$750.00</TextAmount>
            </HistoryCardContainer>
        </HistoryContainer>
    )
}

export default History