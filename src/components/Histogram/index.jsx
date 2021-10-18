/* eslint-disable */
import * as React from 'react';
import {
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryTooltip,
  VictoryHistogram,
} from 'victory';
import StyledHistogram from './styled';
import generateFill from '../../utils/generateFill';

const Histogram = ({ data }) => {
  return (
    <StyledHistogram>
      <VictoryChart>
        <VictoryHistogram
          style={{ data: { stroke: 'gray', strokeWidth: 1, fill: 'gray' } }}
          data={data}
          bins={[
            0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25,
            3.5, 3.75, 4, 4.25, 4.5, 4.75, 5,
          ]}
        />
      </VictoryChart>
    </StyledHistogram>
  );
};

export default Histogram;
