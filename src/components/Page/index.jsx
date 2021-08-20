import * as React from 'react';
import StyledPage from './styled';
import Meta from '../Meta';
import Header from '../Header';
import Footer from '../Footer';

const Page = ({ children }) => (
  <StyledPage>
    <Meta />
    <Header />
    <main>{children}</main>
    <Footer />
  </StyledPage>
);

export default Page;
