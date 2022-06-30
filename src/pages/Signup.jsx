import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import { LoginContainer } from '../components/styles/LoginContainer.styled'
import { Input, InputDiv, InputLabel, LoginErrorText, RightCol, SignInText, StyledButton } from '../components/styles/RightCol.styled'
import { auth, db } from '../helpers/FirebaseConfig'

function Signup() {

    const navigate = useNavigate()

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [fNameError, setfNameError] = useState('')
    const [lNameError, setlNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const signUpAction = async () => {
        try {
            fName === '' ? setfNameError('Please Fill in your First name') : setfNameError('')
            lName === '' ? setlNameError('Please Fill in your Last name') : setlNameError('')
            email === '' ? setEmailError('Please Fill in a valid Email') : setEmailError('')
            password === '' ? setPasswordError('Please use a password atleast 6 characters ling') : setPasswordError('')
            if (fName && lName && email && password) {
                const newUser = await createUserWithEmailAndPassword(auth, email, password)
                await createUser(newUser.user.uid)
                await updateProfile(newUser.user, { displayName: fName + ' ' + lName })
                navigate('/')
                toast.success('You may now log in', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
            }
        } catch (error) {
            error ? setEmailError('Please Fill in a valid Email') : setEmailError('')
        }
    }

    const createUser = async (id) => {
        const userCollection = collection(db, 'users')
        await addDoc(userCollection, { fName, lName, email, id, balance: 0, totalIncome: 0, totalExpenses: 0, transactionIds: [] })
    }

    return (
        <LoginContainer>
            <Hero />
            <RightCol>
                <SignInText>Ready to Sign up?</SignInText>
                <InputDiv>
                    <InputLabel>First Name</InputLabel>
                    <Input type='text' placeholder='Your Given Name...' onChange={e => setFName(e.target.value)} required></Input>
                    {fNameError ? <LoginErrorText>{fNameError}</LoginErrorText> : ''}
                    <InputLabel>Last Name</InputLabel>
                    <Input type='text' placeholder='Your Given Last Name...' onChange={e => setLName(e.target.value)} required></Input>
                    {lNameError ? <LoginErrorText>{lNameError}</LoginErrorText> : ''}
                    <InputLabel>Email</InputLabel>
                    <Input type='email' placeholder='Your Email here...' onChange={e => setEmail(e.target.value)} required></Input>
                    {emailError ? <LoginErrorText>{emailError}</LoginErrorText> : ''}
                    <InputLabel>Password</InputLabel>
                    <Input type='password' placeholder='Your password here...' onChange={e => setPassword(e.target.value)} required></Input>
                    {passwordError ? <LoginErrorText>{passwordError}</LoginErrorText> : ''}
                    <StyledButton onClick={() => signUpAction()}>Sign up</StyledButton>
                </InputDiv>
            </RightCol>
        </LoginContainer>
    )
}

export default Signup