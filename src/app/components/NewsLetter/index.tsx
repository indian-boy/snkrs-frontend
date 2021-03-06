import { Button } from 'app/components';
import { ReactComponent as NikeLogo } from 'assets/svgs/logos/nike.svg';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeProviderWrapper from 'styles/themes/themeProvider';
import { messages } from './messages';
import { Content, Message, Title } from './styles';

interface Props {}

export const NewsLetter = memo((props: Props) => {
  const { t } = useTranslation();

  return (
    <ThemeProviderWrapper>
      <Content {...props}>
        <NikeLogo style={{ marginBottom: '1.5rem' }}></NikeLogo>
        <Title>{t(messages.i18nTitle())}</Title>
        <Message>{t(messages.i18nMessage())}</Message>
        <Button label={t(messages.i18nRegisterButtonLabel())}></Button>
      </Content>
    </ThemeProviderWrapper>
  );
});
