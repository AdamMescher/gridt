import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    --button-background: #075985;
    --button-background-hover: #0ea5e9;
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
    // Typography
    .bold {
      font-weight: 700;
    }
    .title {
      font-size: 24px;
      margin-top: 20px;
      margin-bottom: 12px;
    }
    .subtitle {
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 8px;
    }
    .citation {
      text-indent: -36px;
      padding-left: 36px;
      white-space: pre-line;
    }
    // BUTTON styling
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
    .button:disabled {
      background: gray;
      cursor: not-allowed;
    }

    // utility classes
    .topright {
    position: absolute;
    margin-top: 0;
    padding: 15px;
    right: -2px;
    top: -2px;
    border-radius: 0;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

export default GlobalStyle;
