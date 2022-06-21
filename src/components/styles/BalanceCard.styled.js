import styled from "styled-components";

export const StyledCard = styled.div`
    width: 35rem;
    height: 10rem;
    /* background-color: blue; */
    box-shadow: 0 0 5px #C4B6B6;
    border-radius: .5rem;
    display: flex;
    margin-top: 2em;
` 

export const TransactionContainer = styled.div`
    width: 50%;
    display: flex;
    text-align: center;
    flex-direction: column;
`

export const TransactionTypeText = styled.h3`
    width: 100%;
    font-size: 1.5rem;
    padding: 1rem;
`
export const TransactionAmount = styled.p`
    color: ${({color}) => color};
    font-size: 3rem;
`