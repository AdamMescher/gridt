import styled from 'styled-components';

const StyledWelcome = styled.section`
  .definitions,
  .steps {
    list-style: none;
  }
  .definitions li {
    margin-top: 6px;
  }
  .steps {
    width: 60%;
    counter-reset: steps;
  }
  .steps li {
    counter-increment: steps;
    margin-top: 6px;
  }
  .steps li::before {
    content: counter(steps);
    margin-right: 0.3rem;
  }
  .tables {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .steps-definitions li {
    margin-top: 8px;
  }
  .steps-container .button {
    margin-top: 8px;
  }
  .risk {
    padding: 2px 4px 2px 4px;
    background: var(--emerald);
    color: var(--dark-emerald);
  }
  .outcome {
    padding: 2px 4px 2px 4px;
    background: var(--orange);
    color: var(--dark-orange);
  }

  .overrepresentation {
    padding: 2px 4px 2px 4px;
    background: var(--fuchsia);
    color: var(--dark-fuchsia);
  }

  .underrepresentation {
    padding: 2px 4px 2px 4px;
    background: var(--sky);
    color: var(--dark-sky);
  }
`;

export default StyledWelcome;
