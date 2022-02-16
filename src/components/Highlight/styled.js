import styled from 'styled-components';

const StyledHighlight = styled.span`
  --slate: #e2e8f0;
  --dark-slate: #1e293b;
  --fuchsia: #f5d0fe;
  --dark-fuchsia: #701a75;
  --emerald: #6ee7b7;
  --dark-emerald: #064e3b;
  --orange: #fdba74;
  --dark-orange: #7c2d12;
  display: inline-block;
  padding: 2px 4px 2px 4px;
  font-size: 18px;
  color: ${(props) => {
    switch (props.color) {
      case 'fuchsia':
        return 'var(--dark-fuchsia)';
      case 'emerald':
        return 'var(--dark-emerald)';
      case 'orange':
        return 'var(--dark-orange)';
      default:
        return 'var(--dark-slate)';
    }
  }};
  background: ${(props) => {
    switch (props.color) {
      case 'fuchsia':
        return 'var(--fuchsia)';
      case 'emerald':
        return 'var(--emerald)';
      case 'orange':
        return 'var(--orange)';
      default:
        return 'var(--slate)';
    }
  }};
`;

export default StyledHighlight;
