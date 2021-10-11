/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Footer, NewsLetter, NewsSlider } from 'app/components';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import { GlobalStyles } from 'styles/global-styles';
import { ShoppingStore } from 'types';
import { Header, TopHeader } from './components';
import { ModalContext } from './components/commons/Modal/context';
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
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - SNKRS App"
          defaultTitle="SNKRS App"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="SNKRS App" />
        </Helmet>

        <ModalContext.Provider value={{ state, setModalDataIntoContext }}>
          <Wrapper>
            <TopHeader />
            <Header />
            <NewsSlider />
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
    </IntlProvider>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
