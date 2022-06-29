import styled  from "styled-components";

export const RightCol = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 4rem;

    @media (max-width: 1024px) {
        width: 100%;
        height: auto;
        margin: 4rem auto;
    }

    @media (max-width: 650px) {
        padding: 0 2rem;
        height: auto;
    }
    
`

export const SignInText = styled.h2`
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;

    @media (max-width: 650px) {
        font-size: 1.7rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
`

export const InputDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputLabel = styled.label`
    font-size: .8rem;
    padding: .5em;
    width: 50%;
    margin-top: .8rem;
    @media (max-width: 650px) {
        width: 90%;
    }
`

export const LoginErrorText = styled.p`
    color: #f44336;
    font-weight: 600;
    margin-top: .3rem;
`

export const Input = styled.input`
    padding: .2rem .5rem;
    width: 50%;
    border: none;
    border-bottom: 1px solid #413b5f;
    font-size: .8rem;
    transition: all 1 ease;

    :focus {
        border-bottom: 2px solid #413b5f;
        outline-color: transparent;
    }
        @media (max-width: 650px) {
        width: 90%;
    }
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
    margin-bottom: 1rem;
    background-image: linear-gradient(to left, transparent 50%, #FFD369 50%);
    background-size: 200%;
    background-position: right;
    transition: .3s ease-in;

    :hover {
        background-position: left;
        color: white;
    }

    :active {
        transform: translateY(3em);
    }

    @media (max-width: 650px) {
        width: 90%;
    }
`