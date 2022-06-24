import React from 'react'
import { HistoryCardContainer, HistoryContainer, HistoryH1, HistoryLink, HistoryTextContainer, HistoryTitleContainer, TextAmount, TextDate, TextTransaction } from './styles/History.styled'

function History({ userTransactions }) {

    return (
        <HistoryContainer>
            <HistoryTitleContainer>
                <HistoryH1>History</HistoryH1>
                <HistoryLink>View All</HistoryLink>
            </HistoryTitleContainer>
            {userTransactions.slice(0, 3).map(item => (
                <HistoryCardContainer key={item.id} color={item.isIncome === true ? '#5cb85c' : '#d9534f'}>
                    <HistoryTextContainer>
                        <TextTransaction>{item.details}</TextTransaction>
                        <TextDate>{item.createdAt.toDate().toLocaleDateString()}</TextDate>
                    </HistoryTextContainer>
                    <TextAmount>{item.isIncome ? '+ ' : '- '}${item.amount}</TextAmount>
                </HistoryCardContainer>
            ))}
        </HistoryContainer>
    )
}

export default History