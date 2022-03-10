import styled from 'styled-components';

const StyledWhatNow = styled.section`
  ol {
    margin-top: 14px;
    list-style: none;
    width: 60%;
    counter-reset: now;
  }
  ol li {
    counter-increment: steps;
  }
  ol li::before {
    content: counter(steps);
    margin-right: 0.3rem;
    font-weight: bold;
  }
`;

export default StyledWhatNow;
