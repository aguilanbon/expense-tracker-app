import React from 'react'
import BalanceCard from '../components/BalanceCard'
import { HomeContainer, LeftColumn, RightColumn, TextH2, TextH3 } from '../components/styles/HomeContainer.styled'

function Home() {
    return (
        <HomeContainer>
            <LeftColumn>
                <TextH3>Your Balance</TextH3>
                <TextH2>$3400.00</TextH2>
                <BalanceCard />
            </LeftColumn>
            <RightColumn></RightColumn>
        </HomeContainer>
    )
}

export default Home