import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import ThemeProviderWrapper from 'styles/themes/themeProvider';
import { useCheckIsMediumScreen } from 'utils/helpers';
import { messages } from './messages';
import {
  BagIconCustomized,
  CenterWrapper,
  HamburguerMenuIconCustomized,
  HeaderLink,
  HeaderSearchInput,
  LeftSideWrapper,
  NikeLogoCustomized,
  RightSideWrapper,
  Wrapper,
} from './styles';

interface Props {}

export const Header = memo((props: Props) => {
  const { t } = useTranslation();
  const isMediumScreen = useCheckIsMediumScreen();

  return (
    <BrowserRouter>
      <ThemeProviderWrapper>
        <Wrapper {...props}>
          <LeftSideWrapper>
            <NikeLogoCustomized />
          </LeftSideWrapper>
          <CenterWrapper>
            <HeaderLink to="/">
              {t(messages.i18nNewOffersPageLink())}
            </HeaderLink>
            <HeaderLink to="/">{t(messages.i18nMalePageLink())}</HeaderLink>
            <HeaderLink to="/">{t(messages.i18nFemalePageLink())}</HeaderLink>
            <HeaderLink to="/">{t(messages.i18nKidsPageLink())}</HeaderLink>
            <HeaderLink to="/">{t(messages.i18nOffersPageLink())}</HeaderLink>
            <HeaderLink to="/">
              {t(messages.i18nNewOffersPageLink())}
            </HeaderLink>
            <HeaderLink to="/">{t(messages.i18nHomePageLink())}</HeaderLink>
          </CenterWrapper>
          <RightSideWrapper>
            <HeaderSearchInput
              hidden={!isMediumScreen}
              style={{ width: '12rem' }}
              secondary
              isRounded={true}
              showSearchIcon={true}
              type="search"
              placeholder={t(messages.i18nSearchButtonLabel())}
            />
            <BagIconCustomized />
            {!isMediumScreen && <HamburguerMenuIconCustomized />}
          </RightSideWrapper>
        </Wrapper>
      </ThemeProviderWrapper>
    </BrowserRouter>
  );
});
