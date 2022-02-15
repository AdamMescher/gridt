import * as React from 'react';
import {
  VictoryAxis,
  VictoryContainer,
  VictoryChart,
  VictoryBar,
  VictoryHistogram,
} from 'victory';
import StyledHistogram from './styled';
import generateFill from '../../utils/generateFill';
import generateBins from '../../utils/generateBins';
import * as d3 from 'd3';

const Histogram = ({
  data,
  title,
  race,
  gender,
  disability,
  selectedSchool,
}) => {
  let raw;
  let binSizes;
  let arr;
  let maxBinSize;
  if (data?.length > 1) {
    raw = data.map((school) => school.x);
    binSizes = generateBins(raw);
    arr = Object.values(binSizes);
    maxBinSize = Math.max(...arr);
  }
  return (
    <StyledHistogram>
      {(selectedSchool &&
        selectedSchool?.[
          `RR_${race.value}_${gender.value}_POP_${disability.value}`
        ] === null) ||
      selectedSchool?.[
        `RR_${race.value}_${gender.value}_POP_${disability.value}`
      ] === undefined ? (
        <p>{`The selected school - <SCHOOL NAME> does not have enough students in the subgroup to generate meaningful data.`}</p>
      ) : null}
      {race && gender && disability && title ? (
        <p
          style={{ fontFamily: `'Open Sans', sans-serif`, fontSize: 11 }}
        >{`GRAPHTITLE Risk Ratio`}</p>
      ) : null}
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
        <VictoryHistogram
          style={{
            data: { stroke: 'gray', strokeWidth: 1, fill: 'gray' },
          }}
          data={data}
        />
        {gender &&
        race &&
        disability &&
        selectedSchool &&
        selectedSchool?.[
          `RR_${race.value}_${gender.value}_POP_${disability.value}`
        ] !== null &&
        selectedSchool?.[
          `RR_${race.value}_${gender.value}_POP_${disability.value}`
        ] !== undefined ? (
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
        ) : (
          <p>
            {`NO RISK RATIO FOR ${race.value} ${gender.value} ${
              disability.value
            } GENERATED FOR ${
              disability.value === 'TOTAL'
                ? selectedSchool?.SCH_NAME
                : selectedSchool?.SCHOOL_NAME
            }`}
          </p>
        )}
      </VictoryChart>
      {gender &&
      race &&
      disability &&
      selectedSchool &&
      selectedSchool?.[
        `RR_${race.value}_${gender.value}_POP_${disability.value}`
      ] !== null &&
      selectedSchool?.[
        `RR_${race.value}_${gender.value}_POP_${disability.value}`
      ] !== undefined ? (
        <p>
          `Risk Ratio for $
          {disability.value === 'TOTAL'
            ? selectedSchool.SCH_NAME
            : selectedSchool.SCHOOL_NAME}
          $
          {
            selectedSchool?.[
              `RR_${race.value}_${gender.value}_POP_${disability.value}`
            ]
          }
          `
        </p>
      ) : null}
    </StyledHistogram>
  );
};

export default Histogram;
