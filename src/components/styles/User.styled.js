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
    opacity: .9;
    font-weight: 200;
`

export const UserLogoutBtn = styled.button`
    border: none;
    background-color: rgb(81, 123, 237);
    padding: .3rem 1rem;
    color: white;
    border-radius: 0.2rem;
    cursor: pointer;

    :hover {
        transform: scale(1.1);
        background-color: rgb(91, 133, 337);
    }
`