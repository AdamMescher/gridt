import * as React from 'react';
import {
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryTooltip,
  VictoryHistogram,
} from 'victory';
import StyledHistogram from './styled';
import Stats from '../Stats';
import generateFill from '../../utils/generateFill';
import generateBins from '../../utils/generateBins';

const Histogram = ({ data, title, race, gender, selectedSchool }) => {
  const bins = [
    0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5,
    3.75, 4, 4.25, 4.5, 4.75, 5,
  ];
  const raw = data.map((school) => school.x);
  const binSizes = generateBins(raw);
  const arr = Object.values(binSizes);
  const maxBinSize = Math.max(...arr);
  return (
    <StyledHistogram>
      <VictoryChart
        style={{ data: { fontFamily: `'Open Sans', sans-serif` } }}
      >
        {title ? (
          <VictoryLabel
            style={{ fontFamily: `'Open Sans', sans-serif` }}
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
          tickLabels={[1.3, 7]}
        />
        {selectedSchool && gender && race ? (
          <VictoryBar
            labelComponent={
              <VictoryTooltip
                style={{ fontFamily: `'Open Sans', sans-serif` }}
              />
            }
            data={[
              {
                x: selectedSchool[`RR_${race.value}_${gender.value}_POP`],
                y: maxBinSize,
                label: selectedSchool[`RR_${race.value}_${gender.value}_POP`],
              },
            ]}
            style={{
              data: {
                fontFamily: `'Open Sans', sans-serif`,
                cursor: 'pointer',
                fill: generateFill(
                  selectedSchool[`RR_${race.value}_${gender.value}_POP`],
                ),
              },
            }}
          />
        ) : null}
      </VictoryChart>
    </StyledHistogram>
  );
};

export default Histogram;
