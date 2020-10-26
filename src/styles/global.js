import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { FreightSansFont } from './vars';

export const GlobalStyle = createGlobalStyle`
    ${normalize()};

    body {
        margin: auto;
        padding: 0;
    }

    body, button {
        font-family: ${FreightSansFont};
    }

     h1, h2, p {
        margin: 0;
    }

    button {
        border: 0;
        outline: 0;
        background: transparent;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;
