import React from 'react'
import Hero from '../components/Hero'
import { Input, InputDiv, InputLabel, LoginErrorText, RightCol, SignInText, StyledButton } from '../components/styles/RightCol.styled'
import { LoginContainer } from '../components/styles/LoginContainer.styled'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../helpers/FirebaseConfig'
import { useContext } from 'react'
import ExpenseContext from '../helpers/ExpenseTrackerContext'
import { useNavigate } from 'react-router-dom'

function Login() {

    const { setIsAuth } = useContext(ExpenseContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const navigate = useNavigate()

    const signInAction = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setIsAuth(true)
            navigate('/home')
        } catch (error) {
            if (error) {
                setLoginError('Email or Password is incorrect')
            }
        }
    }

    return (
        <LoginContainer>
            <Hero />
            <RightCol>
                <SignInText>Log In to your Account</SignInText>
                {loginError === '' ? '' : <LoginErrorText>{loginError}</LoginErrorText>}
                <InputDiv>
                    <InputLabel>Email</InputLabel>
                    <Input type='text' placeholder='Your Email here...' onChange={e => setEmail(e.target.value)}></Input>
                    <InputLabel>Password</InputLabel>
                    <Input type='password' placeholder='Your password here...' onChange={e => setPassword(e.target.value)}></Input>
                    <StyledButton onClick={() => signInAction()}>Log in</StyledButton>
                </InputDiv>
            </RightCol>
        </LoginContainer>
    )
}

export default Login