import styled from "styled-components";

export const HistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;
`

export const HistoryTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid black;
    padding-bottom: 0.5rem;
`

export const HistoryLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-size: .7rem;
    color: deepskyblue;
    
    :hover {
        transform: scale(1.1);
        padding: 0.4rem;
    }
`

export const HistoryH1 = styled.h1`
`

export const HistoryCardContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .7rem;
    margin-top: .5rem;
    box-shadow: 0px .2rem .7rem -10px #111;
    border-right: .4rem solid ${({color}) => color};
`

export const HistoryTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TextTransaction = styled.p`
    font-size: .8rem;
`

export const TextDate = styled.p`
    font-size: .6rem;
    opacity: .8;
`

export const TextAmount = styled.p`
    font-size: .8rem;
`