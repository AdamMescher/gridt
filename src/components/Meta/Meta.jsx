import * as React from 'react';
import { Helmet } from 'react-helmet';

const Meta = () => (
  <Helmet data-testid="header-meta">
    <meta charSet="utf-8" />
    <title>GRID-T</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Work+Sans&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

export default Meta;
