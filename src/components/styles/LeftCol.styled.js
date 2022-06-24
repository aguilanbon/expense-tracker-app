import styled  from "styled-components";

export const LeftCol = styled.div`
    min-width: 50%;
    height: 100vh;
    background-color: #222831;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0 5rem;
    flex-direction: column;

    @media (max-width: 1024px) {
        align-items: center;
        flex-direction: row;
        width: auto;
        height: 30%;
    }

    @media (max-width: 650px) {
        align-items: center;
        flex-direction: column;
        align-items: flex-start;
        width: auto;
        height: 30%;
        padding: 0 2rem;
    }
`

export const AppTitle = styled.h1`
    color: white;
    font-size: 6rem;

    @media (max-width: 1024px) {
        font-size: 4rem;
    }

    @media (max-width: 650px) {
        font-size: 3rem;
    }
`

export const Span = styled.span`
    color: #FFD369;
`