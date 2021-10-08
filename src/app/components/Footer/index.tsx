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
import { useCheckIsMediumScreen } from 'utils/helpers';
import { messages } from './messages';
import {
  CompanyInfos,
  Hr,
  Links,
  LinksMediumScreen,
  LinksSection,
  LinksWrapper,
  MainNavLink,
  MediumScreenWrapper,
  MultipleSectionsWrapper,
  PaymentMethods,
  PaymentOptions,
  SectionLabel,
  SectionNavLink,
  SectionTitleMediumScreen,
  SmallScreenWrapper,
  SocialMedias,
  SocialMediasOptions,
  TermLink,
  TermsLinksMediumScreen,
  TermsSectionMediumScreen,
  TermsSmallScreen,
} from './styles';

interface Props {}

export const Footer = memo((props: Props) => {
  const { t } = useTranslation();

  const helpLinks = [
    {
      label: t(messages.i18nHelpLinks.links.i18nGeneralQuestions()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18FindYourSize()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nOrders()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nExchangesAndReturns()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nEditConsent()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nPayments()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nCookiePreferences()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nProducts()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nCorporate()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nContactUs()),
      url: '/',
    },
  ];

  const aboutNikeLinks = [
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nMadeToPlay()),
      url: '/',
    },
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nGeneralSustentability()),
      url: '/',
    },
  ];

  const isMediumScreen = useCheckIsMediumScreen();

  return (
    <BrowserRouter>
      <Theme>
        {isMediumScreen && (
          <LinksSection>
            <MediumScreenWrapper>
              <LinksMediumScreen>
                <MainNavLink to="/">
                  {t(messages.i18nFindShoppingStore())}
                </MainNavLink>
                <MainNavLink to="/">
                  {t(messages.i18nRegisterForNews())}
                </MainNavLink>
                <MainNavLink to="/">{t(messages.i18nSiteMap())}</MainNavLink>
              </LinksMediumScreen>
              <LinksMediumScreen>
                <SectionTitleMediumScreen>
                  {t(messages.i18nHelpLinks.i18nTitle())}
                </SectionTitleMediumScreen>
                {helpLinks &&
                  helpLinks.map((helpLink, index) => (
                    <SectionNavLink key={index} to={helpLink.url}>
                      {helpLink.label}
                    </SectionNavLink>
                  ))}
              </LinksMediumScreen>
              <LinksMediumScreen>
                <SectionTitleMediumScreen>
                  {t(messages.i18nAboutNikeLinks.i18nTitle())}
                </SectionTitleMediumScreen>
                {aboutNikeLinks &&
                  aboutNikeLinks.map((aboutNikeLink, index) => (
                    <SectionNavLink key={index} to={aboutNikeLink.url}>
                      {aboutNikeLink.label}
                    </SectionNavLink>
                  ))}
              </LinksMediumScreen>
              <MultipleSectionsWrapper>
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
                  <SectionLabel>
                    {t(messages.i18nPaymentMethods())}
                  </SectionLabel>
                  <PaymentOptions>
                    <Amex></Amex>
                    <Discover></Discover>
                    <Elo></Elo>
                    <Hipercard></Hipercard>
                    <Mastercard></Mastercard>
                    <Vista></Vista>
                  </PaymentOptions>
                </PaymentMethods>
              </MultipleSectionsWrapper>
            </MediumScreenWrapper>
            <Hr />
            <TermsSectionMediumScreen>
              <TermsLinksMediumScreen>
                <TermLink to="/">Brasil</TermLink>
                <TermLink to="/">{t(messages.i18nPrivacyPolicy())}</TermLink>
                <TermLink to="/">{t(messages.i18nUserTerms())}</TermLink>
              </TermsLinksMediumScreen>
              <CompanyInfos>{t(messages.i18nCompanyInfos())}</CompanyInfos>
            </TermsSectionMediumScreen>
          </LinksSection>
        )}

        {!isMediumScreen && (
          <SmallScreenWrapper>
            <Links>
              <MainNavLink to="/">
                {t(messages.i18nFindShoppingStore())}
              </MainNavLink>
              <MainNavLink to="/">
                {t(messages.i18nRegisterForNews())}
              </MainNavLink>
              <MainNavLink to="/">{t(messages.i18nSiteMap())}</MainNavLink>
            </Links>
            <Hr />
            <LinksWrapper>
              <LinksDropdown
                title={t(messages.i18nHelpLinks.i18nTitle())}
                links={helpLinks}
              ></LinksDropdown>
              <LinksDropdown
                title={t(messages.i18nAboutNikeLinks.i18nTitle())}
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
            <Hr />
            <TermsSmallScreen>
              <TermLink to="/">Brasil</TermLink>
              <TermLink to="/">{t(messages.i18nPrivacyPolicy())}</TermLink>
              <TermLink to="/">{t(messages.i18nUserTerms())}</TermLink>
            </TermsSmallScreen>
            <CompanyInfos>{t(messages.i18nCompanyInfos())}</CompanyInfos>
          </SmallScreenWrapper>
        )}
      </Theme>
    </BrowserRouter>
  );
});
