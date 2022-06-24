import React from 'react'
import { HistoryCardContainer, HistoryContainer, HistoryH1, HistoryTextContainer, HistoryTitleContainer, TextAmount, TextDate, TextTransaction } from './styles/History.styled'
import { Link } from 'react-router-dom'

function History({ userTransactions }) {

    return (
        <HistoryContainer>
            <HistoryTitleContainer>
                <HistoryH1>History</HistoryH1>
                <Link to='/user/history'>View All</Link>
            </HistoryTitleContainer>
            {userTransactions.slice(0, 5).map(item => (
                <HistoryCardContainer key={item.id} color={item.isIncome === true ? '#5cb85c' : '#d9534f'}>
                    <HistoryTextContainer>
                        <TextTransaction>{item.details}</TextTransaction>
                        <TextDate>{item.createdAt.toDate().toLocaleDateString() || ''}</TextDate>
                    </HistoryTextContainer>
                    <TextAmount>{item.isIncome ? '+ ' : '- '}${item.amount}</TextAmount>
                </HistoryCardContainer>
            ))}
        </HistoryContainer>
    )
}

export default History