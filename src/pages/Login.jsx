import React from 'react'
import Hero from '../components/Hero'
import { Input, InputDiv, InputLabel, RightCol, SignInText, StyledButton } from '../components/styles/RightCol.styled'
import { LoginContainer } from '../components/styles/LoginContainer.styled'

function Login() {
    return (
        <LoginContainer>
            <Hero />
            <RightCol>
                <SignInText>Log In to your Account</SignInText>
                <InputDiv>
                    <InputLabel>Email</InputLabel>
                    <Input type='text' placeholder='Your Email here...'></Input>
                    <InputLabel>Password</InputLabel>
                    <Input type='password' placeholder='Your password here...'></Input>
                    <StyledButton>Log in</StyledButton>
                </InputDiv>
            </RightCol>
        </LoginContainer>
    )
}

export default Login