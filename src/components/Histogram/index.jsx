import * as React from 'react';
import styled from 'styled-components';

import {
  Bar,
  VictoryAxis,
  VictoryContainer,
  VictoryChart,
  VictoryBar,
  VictoryHistogram,
  VictoryPortal,
  VictoryLabel,
} from 'victory';
import generateFill from '../../utils/generateFill';
import generateBins from '../../utils/generateBins';
import generateSelectedSchoolRiskRatioProperty from '../../utils/generateSelectedSchoolRiskRatioProperty';

const Histogram = ({
  data,
  race,
  gender,
  disability,
  comparison,
  selectedSchool,
  riskRatioBarVisible,
}) => {
  let raw;
  let binSizes;
  let arr;
  let maxBinSize;
  let bins;
  if (data?.length > 1) {
    bins = [
      0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
      9.5, 10,
    ];
    raw = data.map((school) => school.x);
    binSizes = generateBins(raw);
    arr = Object.values(binSizes);
    maxBinSize = Math.max(...arr);
  }
  const containerStyles = {
    pointerEvents: 'auto',
    userSelect: 'auto',
    touchAction: 'auto',
  };
  const xAxisStyles = {
    tickLabels: {
      fontFamily: `'Open Sans', sans-serif`,
      fontSize: 12,
    },
    axisLabel: {
      padding: 35,
    },
  };
  const yAxisStyles = {
    tickLabels: {
      fontFamily: `'Open Sans', sans-serif`,
      fontSize: 11,
    },
    axisLabel: {
      padding: 50,
    },
  };
  const histogramStyles = {
    data: { stroke: 'gray', strokeWidth: 1, fill: 'gray' },
  };
  let riskRatioBarStyles;
  if (selectedSchool) {
    riskRatioBarStyles = {
      data: {
        fontFamily: `'Open Sans', sans-serif`,
        cursor: 'pointer',
        fill: generateFill(
          selectedSchool?.[
            generateSelectedSchoolRiskRatioProperty(
              race,
              gender,
              disability,
              comparison,
            )
          ],
        ),
      },
    };
  }
  return (
    <Wrapper data-testid="histogram">
      <VictoryChart
        containerComponent={<VictoryContainer style={containerStyles} />}
      >
        <VictoryAxis
          dependentAxis
          label="Frequency"
          axisLabelComponent={
            <VictoryPortal>
              <VictoryLabel />
            </VictoryPortal>
          }
          style={yAxisStyles}
        />
        <VictoryAxis
          label="Frequency of RRs across National Dataset"
          axisLabelComponent={
            <VictoryPortal>
              <VictoryLabel />
            </VictoryPortal>
          }
          style={xAxisStyles}
        />
        <VictoryHistogram style={histogramStyles} bins={bins} data={data} />
        {riskRatioBarVisible ? (
          <VictoryBar
            dataComponent={
              <Bar pathComponent={<path data-testid="risk-ratio-bar" />} />
            }
            data={[
              {
                x: selectedSchool?.[
                  generateSelectedSchoolRiskRatioProperty(
                    race,
                    gender,
                    disability,
                    comparison,
                  )
                ],
                y: maxBinSize,
              },
            ]}
            style={riskRatioBarStyles}
          />
        ) : null}
      </VictoryChart>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: -1;
  font-family: 'Open Sans', sans-serif;
`;

export default Histogram;
