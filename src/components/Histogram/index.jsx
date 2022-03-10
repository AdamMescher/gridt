import * as React from 'react';
import {
  VictoryAxis,
  VictoryContainer,
  VictoryChart,
  VictoryBar,
  VictoryHistogram,
  VictoryLabel,
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
  comparison,
  selectedSchool,
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
  return (
    <StyledHistogram>
      {selectedSchool &&
      selectedSchool[
        `${
          comparison === 'pop'
            ? `RR_${race.value}_${gender.value}_POP_${disability.value}`
            : `RR_${race.value}_${gender.value}_WH_${gender.value}_${disability.value}`
        }`
      ] == null ? (
        <p style={{ marginLeft: '10px' }}>{`${
          disability.value === 'TOTAL'
            ? selectedSchool.SCH_NAME
            : selectedSchool.SCHOOL_NAME
        } does not have enough students in the subgroup to generate meaningful data.`}</p>
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
          label="Frequency"
          style={{
            tickLabels: {
              fontFamily: `'Open Sans', sans-serif`,
              fontSize: 11,
            },
            axisLabel: {
              padding: 35,
            },
          }}
        />
        <VictoryAxis
          label="Frequency of RRs across National Dataset"
          style={{
            tickLabels: {
              fontFamily: `'Open Sans', sans-serif`,
              fontSize: 12,
            },
            axisLabel: {
              padding: 25,
            },
          }}
        />
        <VictoryHistogram
          style={{
            data: { stroke: 'gray', strokeWidth: 1, fill: 'gray' },
          }}
          bins={bins}
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
            {`NO RISK RATIO FOR ${race.label} ${gender.label} ${
              disability.label
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
        <p>{`The Risk Ratio for ${
          disability.value === 'TOTAL'
            ? selectedSchool.SCH_NAME
            : selectedSchool.SCHOOL_NAME
        } is
          ${
            comparison === 'pop'
              ? selectedSchool?.[
                  `RR_${race.value}_${gender.value}_POP_${disability.value}`
                ]
              : selectedSchool[
                  `RR_${race.value}_${gender.value}_WH_${gender.value}_${disability.value}`
                ]
          }
          `}</p>
      ) : null}
    </StyledHistogram>
  );
};

export default Histogram;
