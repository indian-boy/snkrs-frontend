import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import ThemeProviderWrapper from 'styles/themes/themeProvider';
import { messages } from './messages';
import {
  JordanLogoCustomized,
  LeftIcons,
  RightIcons,
  SNKRSLogoCustomized,
  TopHeaderNavLink,
  VerticalLineSeparator,
  Wrapper,
} from './styles';

interface Props {}

export const TopHeader = memo((props: Props) => {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <ThemeProviderWrapper>
        <Wrapper {...props}>
          <LeftIcons>
            <JordanLogoCustomized />
            <SNKRSLogoCustomized />
          </LeftIcons>
          <RightIcons>
            <TopHeaderNavLink to="/">
              {t(messages.i18nHelpPageLink())}
            </TopHeaderNavLink>
            <VerticalLineSeparator />
            <TopHeaderNavLink to="/">
              {t(messages.i18nFollowYourOrderPageLink())}
            </TopHeaderNavLink>
            <VerticalLineSeparator />
            <TopHeaderNavLink to="/">
              {t(messages.i18nJoinUsPageLink())}
            </TopHeaderNavLink>
            <VerticalLineSeparator />
            <TopHeaderNavLink to="/">
              {t(messages.i18nLoginLink())}
            </TopHeaderNavLink>
          </RightIcons>
        </Wrapper>
      </ThemeProviderWrapper>
    </BrowserRouter>
  );
});
