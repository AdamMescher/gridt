import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
--button-background: #075985;
--button-background-hover: #0ea5e9;

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

// Typography
body {
  font-family: 'Open Sans', sans-serif;
  color: #1e293b;
}
h1, h2, h3, h4, h5 {
  font-family: 'Work Sans', sans-serif;
  line-height: 1.3;
}
h1 {
  margin-top: 0;
  font-size: 2.488rem;
}

h2 {
  font-size: 2.074rem;
}

h3 {
  font-size: 1.728rem;
}

h4 {
  font-size: 1.44rem;
}

h5 {
  font-size: 1.2rem;
}

small {
  font-size: 0.833rem;
}
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin and add accent color
*/
* {
  margin: 0;
  accent-color: #075985;
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
#root {
  isolation: isolate;
}
`;

export default GlobalStyle;
