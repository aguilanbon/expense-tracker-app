import React from 'react'
import Hero from '../components/Hero'
import InputComponent from '../components/InputComponent'
import { LoginContainer } from '../components/styles/LoginContainer.styled'

function Login() {
    return (
        <LoginContainer>
            <Hero />
            <InputComponent />
        </LoginContainer>
    )
}

export default Login