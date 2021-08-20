import * as React from 'react';
import { Helmet } from 'react-helmet';

const Meta = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>GRID-T</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&family=Source+Serif+Pro:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

export default Meta;
