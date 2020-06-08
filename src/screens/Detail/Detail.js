import React from 'react';
import { Helmet } from 'react-helmet';

import { Recipe } from '../../components/Recipe/Recipe';
import { Container } from '../../components/Layout/Layout-styles';

export const Detail = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Recipe Detail</title>
    </Helmet>
    <Container>
      <Recipe />
    </Container>
  </>
);
