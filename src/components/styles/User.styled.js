import styled from "styled-components";

export const UserInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 1rem;
    align-items: center;
    background-color: rgb(248, 248, 248);
    box-shadow: 5px 5px rgb(231, 231, 231);
    font-family: 'Varela Round', sans-serif;
    border-radius: 0.5em;
`

export const UserTextName = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    @media (max-width: 480px) {
        font-size: .8rem;
    }
`

export const UserLogoutBtn = styled.button`
    border: 1px solid #544a7d;
    background-color: white;
    color: #544a7d;
    padding: .3rem 1rem;
    border-radius: 0.2rem;
    cursor: pointer;

    :hover {
        /* transform: scale(1.1); */
        background-color: #544a7d;
        color: white;
    }

    @media (max-width: 480px) {
        font-size: .6rem;
    }
`