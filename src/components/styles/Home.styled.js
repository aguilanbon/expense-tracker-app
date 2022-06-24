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
        width: 100%;
    }
    @media (max-width: 650px) {
        width: 100%;
        flex-direction: column;
        padding: 3rem;
    }    
    @media (max-width: 480px) {
        width: 100%;
        flex-direction: column;
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

export const TextH3 = styled.h3`
    font-size: 1.5rem;
`
export const TextH2 = styled.h2`
    font-size: 2rem;
`
export const TextH1 = styled.h1`
    font-size: 3rem;
`
