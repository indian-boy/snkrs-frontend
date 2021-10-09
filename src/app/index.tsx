/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Footer, NewsLetter } from 'app/components';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import { GlobalStyles } from 'styles/global-styles';
import Theme from 'styles/themes/main-theme';
import { ShoppingStore } from 'types';
import { ModalContext } from './components/commons/Modal/context';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  const [state, setModalData] = useState<{
    showModal: boolean;
    data: any;
  }>({
    showModal: false,
    data: {},
  });

  const setModalDataIntoContext = (showModal: boolean, data: ShoppingStore) => {
    setModalData({ showModal, data });
  };

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

          <ModalContext.Provider value={{ state, setModalDataIntoContext }}>
            <Wrapper style={state.showModal ? { pointerEvents: 'none' } : {}}>
              <Header></Header>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={NotFoundPage} />
              </Switch>
              <NewsLetter></NewsLetter>
              <Footer></Footer>
            </Wrapper>
          </ModalContext.Provider>

          <GlobalStyles />
        </BrowserRouter>
      </Theme>
    </IntlProvider>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
