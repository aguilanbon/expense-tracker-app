import React from 'react'
import { AppTitle, LeftCol, Span } from './styles/LeftCol.styled'

function Hero() {
    return (
        <LeftCol>
            <AppTitle>
                Expense
            </AppTitle>
            <AppTitle>
                <Span>Tracker</Span>
            </AppTitle>
            <AppTitle>
                App
            </AppTitle>
        </LeftCol>
    )
}

export default Hero