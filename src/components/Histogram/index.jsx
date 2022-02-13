import * as React from 'react';
import {
  VictoryAxis,
  VictoryContainer,
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryHistogram,
} from 'victory';
import StyledHistogram from './styled';
import generateFill from '../../utils/generateFill';
import generateBins from '../../utils/generateBins';

const Histogram = ({
  data,
  title,
  race,
  gender,
  disability,
  selectedSchool,
}) => {
  React.useEffect(() => {
    console.log('FIRED HISTORGRAM RERENDER ----');
    console.log({ data });
  });
  const bins = [
    0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5,
    3.75, 4, 4.25, 4.5, 4.75, 5,
  ];
  let raw;
  let binSizes;
  let arr;
  let maxBinSize;
  if (data?.length >= 1) {
    raw = data.map((school) => school.x);
    binSizes = generateBins(raw);
    arr = Object.values(binSizes);
    maxBinSize = Math.max(...arr);
  }

  return (
    <StyledHistogram>
      <VictoryChart
        containerComponent={
          <VictoryContainer
            style={{
              pointerEvents: 'auto',
              userSelect: 'auto',
              touchAction: 'auto',
            }}
          />
        }
      >
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: {
              fontFamily: `'Open Sans', sans-serif`,
              fontSize: 11,
            },
          }}
        />
        <VictoryAxis
          style={{
            tickLabels: {
              fontFamily: `'Open Sans', sans-serif`,
              fontSize: 12,
            },
          }}
        />
        {title ? (
          <VictoryLabel
            style={{ fontFamily: `'Open Sans', sans-serif`, fontSize: 11 }}
            text={`${title.replaceAll('_', ' ')} Risk Ratio`}
            textAnchor="middle"
            x={225}
            y={10}
          />
        ) : null}
        <VictoryHistogram
          style={{
            data: { stroke: 'gray', strokeWidth: 1, fill: 'gray' },
          }}
          data={data}
          bins={bins}
        />
        {selectedSchool?.[
          `RR_${race.value}_${gender.value}_POP_${disability.value}`
        ] >= 0 &&
        gender &&
        race &&
        disability ? (
          <VictoryBar
            data={[
              {
                x: selectedSchool[
                  `RR_${race.value}_${gender.value}_POP_${disability.value}`
                ],
                y: maxBinSize,
                label: `Risk Ratio: ${
                  selectedSchool[
                    `RR_${race.value}_${gender.value}_POP_${disability.value}`
                  ]
                }`,
              },
            ]}
            style={{
              data: {
                fontFamily: `'Open Sans', sans-serif`,
                cursor: 'pointer',
                fill: generateFill(
                  selectedSchool[
                    `RR_${race.value}_${gender.value}_POP_${disability.value}`
                  ],
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
