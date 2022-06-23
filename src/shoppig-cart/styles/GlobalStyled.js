import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: sans-serif;
    }
    :root {
        --blue:#02084d;
        --lightblue:#3545f3;
  
    }
`
