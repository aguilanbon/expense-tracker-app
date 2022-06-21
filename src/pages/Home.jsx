import React from 'react'
import BalanceCard from '../components/BalanceCard'
import { HomeContainer, LeftColumn, RightColumn, TextH2, TextH1 } from '../components/styles/Home.styled'

function Home() {
    return (
        <HomeContainer>
            <LeftColumn>
                <TextH2>Your Balance</TextH2>
                <TextH1>$3400.00</TextH1>
                <BalanceCard />
            </LeftColumn>
            <RightColumn></RightColumn>
        </HomeContainer>
    )
}

export default Home