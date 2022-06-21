import React from 'react'
import Hero from '../components/Hero'
import { LoginContainer } from '../components/styles/LoginContainer.styled'
import { Input, InputDiv, InputLabel, RightCol, SignInText, StyledButton } from '../components/styles/RightCol.styled'

function Signup() {
    return (
        <LoginContainer>
            <Hero />
            <RightCol>
                <SignInText>Ready to Sign up?</SignInText>
                <InputDiv>
                    <InputLabel>First Name</InputLabel>
                    <Input type='text' placeholder='Your Given Name...'></Input>
                    <InputLabel>Last Name</InputLabel>
                    <Input type='text' placeholder='Your Given Last Name...'></Input>
                    <InputLabel>Email</InputLabel>
                    <Input type='email' placeholder='Your Email here...'></Input>
                    <InputLabel>Password</InputLabel>
                    <Input type='password' placeholder='Your password here...'></Input>
                    <StyledButton>Sign up</StyledButton>
                </InputDiv>
            </RightCol>
        </LoginContainer>
    )
}

export default Signup