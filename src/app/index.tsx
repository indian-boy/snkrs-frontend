/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { mainTheme } from 'styles/themes/main-theme';
import { ThemeProvider } from 'styled-components';

export function App() {
  const { i18n } = useTranslation();
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - SNKRS App"
          defaultTitle="SNKRS App"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="SNKRS App" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}
