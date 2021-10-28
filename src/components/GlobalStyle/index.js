import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
      font-family: 'Open Sans', sans-serif;
    }
    h1, h2, h3, h4, h5 {
      font-family: 'Work Sans', sans-serif;
    }
`;

export default GlobalStyle;
