import { LinksDropdown } from 'app/components';
import { ReactComponent as Amex } from 'assets/svgs/logos/amex.svg';
import { ReactComponent as Discover } from 'assets/svgs/logos/discover.svg';
import { ReactComponent as Elo } from 'assets/svgs/logos/elo.svg';
import { ReactComponent as FacebookLogo } from 'assets/svgs/logos/facebook_rounded_white.svg';
import { ReactComponent as Hipercard } from 'assets/svgs/logos/hipercard.svg';
import { ReactComponent as InstagramLogo } from 'assets/svgs/logos/instagram_rounded_white.svg';
import { ReactComponent as Mastercard } from 'assets/svgs/logos/mastercard.svg';
import { ReactComponent as Vista } from 'assets/svgs/logos/visa.svg';
import { ReactComponent as YoutubeLogo } from 'assets/svgs/logos/youtube_rounded_white.svg';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Theme from 'styles/themes/main-theme';
import { messages } from './messages';
import {
  CompanyInfos,
  Links,
  LinksWrapper,
  MainNavLink,
  PaymentMethods,
  PaymentOptions,
  SectionLabel,
  SocialMedias,
  SocialMediasOptions,
  TermLink,
  Terms,
  Wrapper,
} from './styles';

interface Props {}

export const Footer = memo((props: Props) => {
  const { t } = useTranslation();

  const helpLinks = [
    {
      label: 'Some link',
      url: 'some-url',
    },
  ];

  const aboutNikeLinks = [
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nGeneralQuestions()),
      url: 'some-url',
    },
    {
      label: t(messages.i18nAboutNikeLinks.links.i18FindYourSize()),
      url: 'some-url',
    },
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nOrders()),
      url: 'some-url',
    },
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nExchangesAndReturns()),
      url: 'some-url',
    },
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nEditConsent()),
      url: 'some-url',
    },
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nPayments()),
      url: 'some-url',
    },
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nCookiePreferences()),
      url: 'some-url',
    },
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nProducts()),
      url: 'some-url',
    },
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nCorporate()),
      url: 'some-url',
    },
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nContactUs()),
      url: 'some-url',
    },
  ];

  return (
    <BrowserRouter>
      <Theme>
        <Wrapper>
          <Links>
            <MainNavLink to="/lorem-a">
              {t(messages.i18nFindShoppingStore())}
            </MainNavLink>
            <MainNavLink to="/lorem-b">
              {t(messages.i18nRegisterForNews())}
            </MainNavLink>
            <MainNavLink to="/lorem-c">{t(messages.i18nSiteMap())}</MainNavLink>
          </Links>
          <LinksWrapper>
            <LinksDropdown
              title={t(messages.i18nHelpLinks.i18nSummary())}
              links={helpLinks}
            ></LinksDropdown>
            <LinksDropdown
              title={t(messages.i18nAboutNikeLinks.i18nSummary())}
              links={aboutNikeLinks}
            ></LinksDropdown>
          </LinksWrapper>
          <SocialMedias>
            <SectionLabel>{t(messages.i18nSocialMedias())}</SectionLabel>
            <SocialMediasOptions>
              <NavLink to="/">
                <FacebookLogo></FacebookLogo>
              </NavLink>
              <NavLink to="/">
                <InstagramLogo></InstagramLogo>
              </NavLink>
              <NavLink to="/">
                <YoutubeLogo></YoutubeLogo>
              </NavLink>
            </SocialMediasOptions>
          </SocialMedias>
          <PaymentMethods>
            <SectionLabel>{t(messages.i18nPaymentMethods())}</SectionLabel>
            <PaymentOptions>
              <Amex></Amex>
              <Discover></Discover>
              <Elo></Elo>
              <Hipercard></Hipercard>
              <Mastercard></Mastercard>
              <Vista></Vista>
            </PaymentOptions>
          </PaymentMethods>
          <Terms>
            <TermLink to="/">Brasil</TermLink>
            <TermLink to="/">{t(messages.i18nPrivacyPolicy())}</TermLink>
            <TermLink to="/">{t(messages.i18nUserTerms())}</TermLink>
          </Terms>
          <CompanyInfos>{t(messages.i18nCompanyInfos())}</CompanyInfos>
        </Wrapper>
      </Theme>
    </BrowserRouter>
  );
});
