import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box
    }

    body {
        margin: 0;
        font-family: 'Fira Code', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${ ( { theme } ) => theme.colors.background };
        --wrapper-size: 1340px;
        --wrapper-padding-main: 2.5rem;
        --wrapper-padding: 1rem;
        --header-height: 90px;
        @media only screen and (max-width: 600px) {
            --wrapper-padding: .75rem;
            --wrapper-padding-main: 1rem;
        }
    }

    html {
        font-size: calc( 18px + .1vw );
    }

    select, input, button, span, ul, li, table, thead, tbody, tr, th, td {
        font-size: 1em;
        font-family: 'Fira Code', 'Helvetica Neue', sans-serif;
    }

    mark {
        color: white;
        background-color: ${ ( { theme } ) => theme.colors.highlight };
        line-height: 1.2;
    }

`