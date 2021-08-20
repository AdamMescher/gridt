/* eslint-disable no-nested-ternary */
import * as React from 'react';
import Page from '../Page';
import Histogram from '../Histogram';

const data = [
  { x: 0 },
  { x: 1 },
  { x: 1 },
  { x: 1 },
  { x: 1 },
  { x: 2 },
  { x: 2 },
  { x: 3 },
  { x: 4 },
  { x: 7 },
  { x: 7 },
  { x: 10 },
];

const App = () => (
  <Page>
    <Histogram data={data} />
  </Page>
);

export default App;
