/* eslint-disable */
import * as React from 'react';
import * as d3 from 'd3';
import {
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryTooltip,
  VictoryHistogram,
} from 'victory';
import StyledHistogram from './styled';
import generateFill from '../../utils/generateFill';

const Histogram = ({ data, title, race, gender, selectedSchool }) => {
  const bins = [
    0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5,
    3.75, 4, 4.25, 4.5, 4.75, 5,
  ];
  return (
    <StyledHistogram>
      <VictoryChart>
        {title ? (
          <VictoryLabel
            text={`${title.replaceAll('_', ' ')} Risk Ratio`}
            textAnchor="middle"
            x={225}
            y={10}
          />
        ) : null}
        <VictoryHistogram
          style={{ data: { stroke: 'gray', strokeWidth: 1, fill: 'gray' } }}
          data={data}
          bins={bins}
        />
        {selectedSchool && gender && race ? (
          <VictoryBar
            data={[
              {
                x: selectedSchool[`RR_${race.value}_${gender.value}_POP`],
                y: 10,
                label: selectedSchool[`RR_${race.value}_${gender.value}_POP`],
              },
            ]}
            labelComponent={<VictoryTooltip />}
          />
        ) : null}
      </VictoryChart>
    </StyledHistogram>
  );
};

export default Histogram;
