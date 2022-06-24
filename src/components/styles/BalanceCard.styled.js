import styled from "styled-components";

export const StyledCard = styled.div`
    width: 100%;
    height: auto;
    border-radius: .5rem;
    display: flex;
    margin: 2rem auto;
` 

export const TransactionContainer = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
`

export const TransactionTypeText = styled.h3`
    width: 100%;
    font-size: 1.2rem;
    padding: 1rem;
    @media (max-width: 480px) {
        font-size: .9rem;
    }
`
export const TransactionAmount = styled.p`
    color: ${({color}) => color};
    font-size: 2rem;
    @media (max-width: 480px) {
        font-size: 1.7rem;
    }

`