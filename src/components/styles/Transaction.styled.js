import styled from "styled-components";

export const TransactionContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0 1rem;
    @media (max-width: 480px) {
        padding: 0;
    }
`

export const TransactionLabel = styled.label`
    width: 100%;
    font-size: 1rem;
    margin: 1rem 0 .5rem 0;
`

export const TransactionH1 = styled.h1`
    border-bottom: 1px solid black;
    margin-top: 2rem;
`

export const TransactionInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    height: 3rem;
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
`

export const TransactionButton = styled.button`
    padding: 0.5rem;
    width: 100%;
    margin: 1rem 0;
    height: 2.5rem;
    cursor: pointer;
    color: ${({color}) => color};
    background-color: ${({bg}) => bg};
    border: 1px solid ${({color}) => color};
    border-radius: 0.2rem;
    transition: all 150ms ease-in;

    :hover {
        background-color: ${({hv}) => hv};
        transform: translateY(-.1rem);
    }

    :active {
        transform: scale(1);
    }

    @media (max-width: 480px) {
        height: 3rem;
    }
`

export const TransactionError = styled.p`
    color: red;
    margin-top: .3rem;
`