import styled from "styled-components";

export const StyledCard = styled.div`
    width: 100%;
    height: auto;
    border-radius: .5rem;
    display: flex;
    margin: 1rem auto;
` 

export const TransactionContainer = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
`

export const TransactionTypeText = styled.h3`
    width: 100%;
    font-size: 1.8vw;
    padding: 1rem;
    @media (max-width: 1024px) {
        font-size: 2vw;
    }
    @media (max-width: 650px) {
        font-size: 3.5vw;
    }
`
export const TransactionAmount = styled.p`
    color: ${({color}) => color};
    font-size: 2vw;
    @media (max-width: 1024px) {
        font-size: 3vw;
    }
    @media (max-width: 650px) {
        font-size: 5vw;
    }
    @media (max-width: 480px) {
        font-size: 6.5vw;
    }

`