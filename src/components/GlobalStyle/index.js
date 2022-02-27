import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    --button-background: #075985;
    --button-background-hover: #0ea5e9;
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
      text-decoration: underline;
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
  /*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/ƒ
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyle;
