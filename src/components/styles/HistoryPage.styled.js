import { Link } from 'react-router-dom'
import styled from "styled-components";

export const HistoryPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: auto;
    margin: 2rem auto;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 650px) {
        width: 90%;
    }
`

export const BackLink = styled(Link)`
    font-size: .8rem;
    margin-bottom: 1rem;
    text-decoration: none;

    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
            background-color: rgb(191, 191, 191);
        color: aliceblue;

    :hover {
    color: rgb(81, 123, 237);
    background-color: rgb(231, 232, 231);
    }
`

export const PageButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const PageButton = styled.button`
    border: none;
    border-radius: .2rem;
    padding: .2rem 1rem;
    font-size: .6rem;
    margin-top: 1rem;
    cursor: pointer;
    color: white;
    background-color: rgba(81, 123, 237, .8);
    margin: 1rem .3rem;

    :hover {
        background-color: rgb(81, 123, 237);
    }
`