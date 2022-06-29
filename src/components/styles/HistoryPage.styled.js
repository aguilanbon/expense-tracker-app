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
    background-color: white;
    color: #544a7d;
    border: 1px solid #544a7d;
    opacity: .7;

    :hover {
    color: #544a7d;
    opacity: 1;
    }
`

export const PageButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const PageButton = styled.button`
    border: 1px solid #544a7d;
    border-radius: .2rem;
    padding: .2rem 1rem;
    font-size: .7rem;
    margin-top: 1rem;
    cursor: pointer;
    background-color: white;
    color: #544a7d;
    margin: 1rem .3rem;

    :hover {
        background-color: #544a7d;
        transform: scale(1.1);
        color: white;
    }

    :active {
        transform: translateY(.5em);
    }
`