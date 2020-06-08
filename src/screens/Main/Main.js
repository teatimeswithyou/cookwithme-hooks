import React from 'react';
import { Helmet } from 'react-helmet';

import { Recipes } from '../../components/Recipes/Recipes';
import { Container } from '../../components/Layout/Layout-styles';

export const Main = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
    </Helmet>
    <main>
      <Container>
        <Recipes />
      </Container>
    </main>
  </>
);
