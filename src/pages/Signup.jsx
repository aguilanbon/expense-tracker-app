import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import { LoginContainer } from '../components/styles/LoginContainer.styled'
import { Input, InputDiv, InputLabel, RightCol, SignInText, StyledButton } from '../components/styles/RightCol.styled'
import ExpenseContext from '../helpers/ExpenseTrackerContext'
import { auth, db } from '../helpers/FirebaseConfig'

function Signup() {

    const { setIsLoginPage } = useContext(ExpenseContext)
    const navigate = useNavigate()

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUpAction = async () => {
        const newUser = await createUserWithEmailAndPassword(auth, email, password)
        await createUser(newUser.user.uid)
        await updateProfile(newUser.user, { displayName: fName + ' ' + lName })
        navigate('/home')
        setIsLoginPage(false)
        console.log(newUser);
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