import StyledHyperLink from './styled';

const HyperLink = (props) => (
  <StyledHyperLink className="hyperlink" href={props.href} {...props}>
    {props.text}
  </StyledHyperLink>
);

export default HyperLink;
