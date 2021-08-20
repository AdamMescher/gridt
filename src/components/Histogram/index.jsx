import * as React from 'react';
import { VictoryChart, VictoryHistogram } from 'victory';

const Histogram = ({ data }) => (
  <VictoryChart>
    <VictoryHistogram data={data} />
  </VictoryChart>
);

export default Histogram;
