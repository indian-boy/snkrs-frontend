/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Footer, NewsLetter } from 'app/components';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from 'styles/global-styles';
import Theme from 'styles/themes/main-theme';
import { Header } from './components/Header';
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
          <Header></Header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <NewsLetter></NewsLetter>
          <Footer></Footer>
          <GlobalStyles />
        </BrowserRouter>
      </Theme>
    </IntlProvider>
  );
}
