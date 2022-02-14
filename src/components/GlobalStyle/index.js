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
    .button {
      font-size: 16px;
      border-radius: 4px;
      border: none;
      padding: 8px 15px;
      background: #075985;
      color: #f1f5f9;
    }
    .button:hover {
      cursor: pointer;
      background: #0ea5e9;
    }
    a {
      color: #22d3ee;
    }
    a:visited {
      color: #818cf8;
    }
`;

export default GlobalStyle;
