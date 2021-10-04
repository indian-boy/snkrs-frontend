/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from 'styles/global-styles';
import Theme from 'styles/themes/main-theme';
import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';

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
