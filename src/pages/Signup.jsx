import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import { LoginContainer } from '../components/styles/LoginContainer.styled'
import { Input, InputDiv, InputLabel, RightCol, SignInText, StyledButton } from '../components/styles/RightCol.styled'
import { auth } from '../helpers/FirebaseConfig'

function Signup() {

    const navigate = useNavigate()

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUpAction = async () => {
        const newUser = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(newUser.user, { displayName: fName + ' ' + lName })
        navigate('/')
        console.log(newUser);
    }

    return (
        <LoginContainer>
            <Hero />
            <RightCol>
                <SignInText>Ready to Sign up?</SignInText>
                <InputDiv>
                    <InputLabel>First Name</InputLabel>
                    <Input type='text' placeholder='Your Given Name...' onChange={e => setFName(e.target.value)}></Input>
                    <InputLabel>Last Name</InputLabel>
                    <Input type='text' placeholder='Your Given Last Name...' onChange={e => setLName(e.target.value)}></Input>
                    <InputLabel>Email</InputLabel>
                    <Input type='email' placeholder='Your Email here...' onChange={e => setEmail(e.target.value)}></Input>
                    <InputLabel>Password</InputLabel>
                    <Input type='password' placeholder='Your password here...' onChange={e => setPassword(e.target.value)}></Input>
                    <StyledButton onClick={() => signUpAction()}>Sign up</StyledButton>
                </InputDiv>
            </RightCol>
        </LoginContainer>
    )
}

export default Signup