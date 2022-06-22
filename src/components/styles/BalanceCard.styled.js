import styled from "styled-components";

export const StyledCard = styled.div`
    width: 100%;
    height: 10rem;
    /* box-shadow: 0px .4rem .7rem -10px #111; */
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
    letter-spacing: .2rem;
`
export const TransactionAmount = styled.p`
    color: ${({color}) => color};
    font-size: 2rem;
`