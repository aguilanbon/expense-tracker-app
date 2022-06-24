import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../helpers/FirebaseConfig'
import { useNavigate } from 'react-router-dom'
import { UserInfoContainer, UserLogoutBtn, UserTextName } from './styles/User.styled'

function User({ currentUserDetails }) {

    const navigate = useNavigate()

    const signOutAction = () => {
        signOut(auth)
        navigate('/')
    }

    return (
        <UserInfoContainer>
            <UserTextName>{currentUserDetails.fName + ' ' + currentUserDetails.lName}</UserTextName>
            <UserLogoutBtn onClick={() => signOutAction()}>Sign out</UserLogoutBtn>
        </UserInfoContainer>
    )
}

export default User