import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Prompt:wght@200;400&family=Shadows+Into+Light&family=Varela+Round&display=swap');

    body{
        margin: 0;
        padding: 0;
        font-family: 'Prompt', sans-serif;
        font-size: 10px;
        color: #292b2c;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyles