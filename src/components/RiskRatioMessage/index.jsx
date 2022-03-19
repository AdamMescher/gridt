import * as React from 'react';
import styled from 'styled-components';
import { FiInfo } from 'react-icons/fi';
import generateFill from '../../utils/generateFill';

const RiskRatioMessage = ({
  gender,
  race,
  disability,
  selectedSchool,
  comparison,
}) => {
  return (
    <Wrapper
      color={generateFill(
        comparison === 'pop'
          ? selectedSchool?.[
              `RR_${race?.value}_${gender?.value}_POP_${disability?.value}`
            ]
          : selectedSchool[
              `RR_${race?.value}_${gender?.value}_WH_${gender?.value}_${disability?.value}`
            ],
      )}
    >
      <Icon>
        <FiInfo
          size={'2rem'}
          color={generateFill(
            comparison === 'pop'
              ? selectedSchool?.[
                  `RR_${race?.value}_${gender?.value}_POP_${disability?.value}`
                ]
              : selectedSchool[
                  `RR_${race?.value}_${gender?.value}_WH_${gender?.value}_${disability?.value}`
                ],
          )}
        />
      </Icon>
      {`The Risk Ratio for ${
        disability.value === 'TOTAL'
          ? selectedSchool.SCH_NAME
          : selectedSchool.SCHOOL_NAME
      } is
                ${
                  comparison === 'pop'
                    ? selectedSchool?.[
                        `RR_${race?.value}_${gender?.value}_POP_${disability?.value}`
                      ]
                    : selectedSchool[
                        `RR_${race?.value}_${gender?.value}_WH_${gender?.value}_${disability?.value}`
                      ]
                }
                `}
    </Wrapper>
  );
};

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
  border-radius: 4px;
  margin-top: 8px;
  border: 2px solid ${(props) => props.color};
  padding: 6px 12px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  padding: 6px;
`;

export default RiskRatioMessage;
