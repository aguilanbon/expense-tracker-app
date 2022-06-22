import styled from "styled-components";

export const HistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;
`

export const HistoryH1 = styled.h1`
    border-bottom: 1px solid black;
`

export const HistoryCardContainer = styled.div`
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    margin-top: 1rem;
    box-shadow: 0px .2rem .7rem -10px #111;
    border-right: .4rem solid ${({color}) => color};
`
export const TextTransaction = styled.p`

`

export const TextAmount = styled.p`
    
`