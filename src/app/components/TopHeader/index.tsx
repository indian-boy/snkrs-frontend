import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import Theme from 'styles/themes/main-theme';
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
      <Theme>
        <Wrapper>
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
      </Theme>
    </BrowserRouter>
  );
});
