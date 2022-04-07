import * as React from 'react';
import styled from 'styled-components';

const HyperLink = ({ href, children, ...rest }) => {
  return (
    <AnchorTag href={href} {...rest}>
      {children || href}
    </AnchorTag>
  );
};

const AnchorTag = styled.a`
  --link-color: #0ea5e9;
  --link-color-hover: #d946ef;
  --link-color-visited: #818cf8;
  --link-color-active: #f472b6;
  color: var(--link-color);
  text-decoration: none;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  &:visited {
    color: var(--link-color-visited);
  }
  &:hover {
    color: var(--link-color-hover);
    text-decoration: underline;
  }
  &:active {
    color: var(--link-color-active);
    text-decoration: none;
  }
`;

export default HyperLink;
