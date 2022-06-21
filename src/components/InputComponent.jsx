import React from 'react'
import { Input, InputDiv, InputLabel, RightCol, SignInText, StyledButton } from './styles/RightCol.styled'

function InputComponent() {
    return (
        <RightCol>
            <SignInText>Log In to your Account</SignInText>
            <InputDiv>
                <InputLabel>Email</InputLabel>
                <Input type='text'></Input>
                <InputLabel>Password</InputLabel>
                <Input type='password'></Input>
                <StyledButton>Log in</StyledButton>
            </InputDiv>
        </RightCol>
    )
}

export default InputComponent