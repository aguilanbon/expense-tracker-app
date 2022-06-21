import React from 'react'
import { HistoryCardContainer, HistoryContainer, HistoryH1, TextAmount, TextTransaction } from './styles/History.styled'

function History() {
    return (
        <HistoryContainer>
            <HistoryH1>History</HistoryH1>
            <HistoryCardContainer color='red'>
                <TextTransaction>Books</TextTransaction>
                <TextAmount>$500.00</TextAmount>
            </HistoryCardContainer>
            <HistoryCardContainer color='green'>
                <TextTransaction>Salary</TextTransaction>
                <TextAmount>$1000.00</TextAmount>
            </HistoryCardContainer>
            <HistoryCardContainer color='green'>
                <TextTransaction>Freelance Project</TextTransaction>
                <TextAmount>$750.00</TextAmount>
            </HistoryCardContainer>
        </HistoryContainer>
    )
}

export default History