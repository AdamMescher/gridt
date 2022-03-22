import * as React from 'react';
import styled from 'styled-components';
import { FiInfo } from 'react-icons/fi';
import Spacer from '../Spacer';
import generateFill from '../../utils/generateFill';
import generateSelectedSchoolRiskRatioProperty from '../../utils/generateSelectedSchoolRiskRatioProperty';

const RiskRatioMessage = ({
  isLoading,
  visible,
  gender,
  race,
  disability,
  selectedSchool,
  comparison,
}) => {
  const borderColor = generateFill(
    selectedSchool?.[
      generateSelectedSchoolRiskRatioProperty(
        race,
        gender,
        disability,
        comparison,
      )
    ],
  );
  console.log({ borderColor });
  const sufficientDataToGenerateResults = () =>
    selectedSchool?.[
      generateSelectedSchoolRiskRatioProperty(
        race,
        gender,
        disability,
        comparison,
      )
    ] ||
    selectedSchool?.[
      generateSelectedSchoolRiskRatioProperty(
        race,
        gender,
        disability,
        comparison,
      )
    ] === 0;
  console.log({ sufficient: sufficientDataToGenerateResults() });
  if (isLoading) return null;
  if (visible && !sufficientDataToGenerateResults()) {
    return (
      <InsufficientDataMessageWrapper>
        <Icon>
          <FiInfo size={'2rem'} color={'#fbbf24'} />
        </Icon>
        <Spacer size={12} axis={'horizontal'} />
        <RiskRatioInfo>
          <SchoolName>
            {disability?.value === 'TOTAL'
              ? selectedSchool?.SCH_NAME
              : selectedSchool?.SCHOOL_NAME}
          </SchoolName>{' '}
          does not have enough students in the subgroup to generate meaningful
          data.
        </RiskRatioInfo>
      </InsufficientDataMessageWrapper>
    );
  }
  if (visible && sufficientDataToGenerateResults()) {
    return (
      <Wrapper>
        <Icon>
          <FiInfo
            size={'2rem'}
            color={generateFill(
              selectedSchool?.[
                generateSelectedSchoolRiskRatioProperty(
                  race,
                  gender,
                  disability,
                  comparison,
                )
              ],
            )}
          />
        </Icon>
        <Spacer size={12} axis={'horizontal'} />
        <RiskRatioInfo
          color={generateFill(
            selectedSchool?.[
              generateSelectedSchoolRiskRatioProperty(
                race,
                gender,
                disability,
                comparison,
              )
            ],
          )}
        >
          The Risk Ratio for {race?.label} {gender?.label}s in{' '}
          {disability.label} at{' '}
          <SchoolName>
            {disability?.value === 'TOTAL'
              ? selectedSchool?.SCH_NAME
              : selectedSchool?.SCHOOL_NAME}
          </SchoolName>{' '}
          is{' '}
          {
            selectedSchool?.[
              generateSelectedSchoolRiskRatioProperty(
                race,
                gender,
                disability,
                comparison,
              )
            ]
          }
        </RiskRatioInfo>
      </Wrapper>
    );
  }
  return null;
};
// return (
//   <Wrapper
//     color={generateFill(
//       comparison === 'pop'
//         ? selectedSchool?.[
//             `RR_${race?.value}_${gender?.value}_POP_${disability?.value}`
//           ]
//         : selectedSchool[
//             `RR_${race?.value}_${gender?.value}_WH_${gender?.value}_${disability?.value}`
//           ],
//     )}
//   >
//     <Icon>
//       <FiInfo
//         size={'2rem'}
//         color={generateFill(
//           comparison === 'pop'
//             ? selectedSchool?.[
//                 `RR_${race?.value}_${gender?.value}_POP_${disability?.value}`
//               ]
//             : selectedSchool[
//                 `RR_${race?.value}_${gender?.value}_WH_${gender?.value}_${disability?.value}`
//               ],
//         )}
//       />
//     </Icon>
//     {`The Risk Ratio for ${
//       disability.value === 'TOTAL'
//         ? selectedSchool.SCH_NAME
//         : selectedSchool.SCHOOL_NAME
//     } is
//               ${
//                 comparison === 'pop'
//                   ? selectedSchool?.[
//                       `RR_${race?.value}_${gender?.value}_POP_${disability?.value}`
//                     ]
//                   : selectedSchool[
//                       `RR_${race?.value}_${gender?.value}_WH_${gender?.value}_${disability?.value}`
//                     ]
//               }
//               `}
// </Wrapper>
// );

/*
          <p>
            {`NO RISK RATIO FOR ${race?.label} ${gender?.label} ${
              disability?.label
            } GENERATED FOR ${
              disability?.value === 'TOTAL'
                ? selectedSchool?.SCH_NAME
                : selectedSchool?.SCHOOL_NAME
            }`}
          </p>
*/

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 550px;
  border-radius: 4px;
  margin-top: 8px;
  border: 2px solid;
  padding: 8px 18px;
`;

const InsufficientDataMessageWrapper = styled(Wrapper)`
  border: 2px solid #fbbf24;
`;

const Icon = styled.div`
  padding: 6px;
`;

const RiskRatioInfo = styled.p``;

const SchoolName = styled.span`
  text-decoration: underline;
`;

export default RiskRatioMessage;
