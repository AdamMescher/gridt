/* eslint-disable no-nested-ternary */
import * as React from 'react';
import Page from '../Page';
import About from '../About';
import GlobalStyle from '../GlobalStyle';

const App = () => (
  <>
    <GlobalStyle />
    <Page>
      <About text="you are here" />
    </Page>
  </>
);

export default App;
