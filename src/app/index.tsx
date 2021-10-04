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
import { useTranslation } from 'react-i18next';
import { IntlProvider } from 'react-intl';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { GlobalStyles } from 'styles/global-styles';
import Theme from 'styles/themes/main-theme';

export function App() {
  const { i18n } = useTranslation();
  return (
    <IntlProvider locale={navigator.language}>
      <Theme>
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
      </Theme>
    </IntlProvider>
  );
}
