import StyledHyperLink from './styled';

const HyperLink = (props) => (
  <StyledHyperLink className="hyperlink" {...props}>
    {props.text}
  </StyledHyperLink>
);

export default HyperLink;
