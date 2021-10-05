import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import Theme from 'styles/themes/main-theme';
import { LinksDropdown } from '../commons/LinksDropdown';
import { messages } from './messages';
import { Links, LinkWrapper, StyledNavLink, Wrapper } from './styles';

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
            <StyledNavLink to="/lorem-a">
              {t(messages.i18nFindShoppingStore())}
            </StyledNavLink>
            <StyledNavLink to="/lorem-b">
              {t(messages.i18nRegisterForNews())}
            </StyledNavLink>
            <StyledNavLink to="/lorem-c">
              {t(messages.i18nSiteMap())}
            </StyledNavLink>
          </Links>
          <LinkWrapper>
            <LinksDropdown
              title={t(messages.i18nHelpLinks.i18nSummary())}
              links={helpLinks}
            ></LinksDropdown>
            <LinksDropdown
              title={t(messages.i18nAboutNikeLinks.i18nSummary())}
              links={aboutNikeLinks}
            ></LinksDropdown>
          </LinkWrapper>
        </Wrapper>
      </Theme>
    </BrowserRouter>
  );
});
