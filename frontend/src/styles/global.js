import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;

    }

    html{
        min-width: 100%;
        min-height: 100%;
        background: linear-gradient(180deg,rgb(1, 8, 14),rgb(20, 22, 27));
        color:rgb(255, 255, 255);
    }
`