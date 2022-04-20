import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #dedede;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`