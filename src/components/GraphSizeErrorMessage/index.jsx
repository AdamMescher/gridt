import * as React from 'react';
import styled from 'styled-components';
import { FiAlertTriangle } from 'react-icons/fi';

const GraphSizeErrorMessage = ({ graphData }) => (
  <GraphSizeErrorMessageWrapper data-testid="graph-size-error-message">
    <IconWrapper>
      <FiAlertTriangle size={'2rem'} color="#fbbf24" />
    </IconWrapper>
    <ErrorMessageCopyWrapper>
      <ErrorMessageCopy>
        Sample size of {graphData?.length} is not large enough to generate
        meaningful data for this subgroup.
      </ErrorMessageCopy>
      <ErrorMessageCopy>Please try another combination.</ErrorMessageCopy>
    </ErrorMessageCopyWrapper>
  </GraphSizeErrorMessageWrapper>
);

const GraphSizeErrorMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 2px solid #fbbf24;
  border-radius: 4px;
  max-width: 600px;
`;
const IconWrapper = styled.span`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;
const ErrorMessageCopyWrapper = styled.div`
  margin-left: 8px;
  padding: 4px 8px;
`;
const ErrorMessageCopy = styled.p`
  &:not(:first-child) {
    margin-top: 4px;
  }
`;

export default GraphSizeErrorMessage;
