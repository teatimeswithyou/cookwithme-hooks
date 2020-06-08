import React from 'react';
import { Helmet } from 'react-helmet';

import { About } from '../../components/About/About';
import { Container } from '../../components/Layout/Layout-styles';

export const AboutPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About Us</title>
    </Helmet>
    <Container>
      <About />
    </Container>
  </>
);
