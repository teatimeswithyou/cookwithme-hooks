import React from 'react';
import { Helmet } from 'react-helmet';

import { About } from '../../components/About/About';
import { Layout } from '../../components/Layout/Layout';

export const AboutPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About Us</title>
    </Helmet>
    <Layout>
      <About />
    </Layout>
  </>
);
