import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../helpers/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import { UserInfoContainer, UserLogoutBtn, UserTextName } from './styles/User.styled'
import toast from 'react-hot-toast'

function User({ currentUserDetails }) {

    const navigate = useNavigate()

    const signOutAction = () => {
        signOut(auth)
        navigate('/')
        toast('Goodbye!', {
            icon: '👋'
        })
    }

    return (
        <UserInfoContainer>
            <UserTextName>{currentUserDetails.fName + ' ' + currentUserDetails.lName}</UserTextName>
            <UserLogoutBtn onClick={() => signOutAction()}>Sign out</UserLogoutBtn>
        </UserInfoContainer>
    )
}

export default User