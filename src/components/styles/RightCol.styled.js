import styled  from "styled-components";

export const RightCol = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 4rem;
`

export const SignInText = styled.h2`
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
`

export const InputDiv = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputLabel = styled.label`
    font-size: 1rem;
    padding: .5em;
    width: 50%;
`

export const Input = styled.input`
    padding: .5rem;
    width: 50%;
`

export const StyledButton = styled.button`
    background-color: white;
    color: #393E46;
    padding: .7rem 1rem;
    margin-top:2rem;
    border-radius: 0.5rem;
    width: 30%;
    cursor: pointer;
    border: 2px solid #FFD369;

    :hover {
        background-color: #FFD369;
        border: none;
        color: white;
    }
`