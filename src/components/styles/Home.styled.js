import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    margin: 0 auto;
    padding: 4em;

    @media (max-width: 1200px) {
        width: 80%;
    }
    @media (max-width: 1024px) {
        width: 95%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
    @media (max-width: 650px) {
        width: 100%;
        flex-direction: column-reverse;
        padding: 3rem;
    }    
    @media (max-width: 480px) {
        width: 100%;
        flex-direction: column-reverse;
        padding: 0.5rem;
    }
`
export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1rem;
    height: auto;
    
    @media (max-width: 650px) {
        width: 100%;
    }
`
export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1rem;
    height: auto;

    @media (max-width: 650px) {
        width: 100%;
    }
`

export const UserBalanceCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    color: #544a7d;
    border: 2px solid #544a7d;
    border-radius: 0.5rem;
    width: 100%;
`

export const TextH3 = styled.h3`
    font-size: 1.5rem;
`
export const TextH2 = styled.h2`
    font-size: 2vw;

    @media (max-width: 650px) {
        font-size: 5vw;
    }
`
export const TextH1 = styled.h1`
    font-size: 3.2vw;

    @media (max-width: 1024px) {
        font-size: 4vw;
    }
    @media (max-width: 650px) {
        font-size: 7vw;
    }
`
