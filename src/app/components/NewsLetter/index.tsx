import { Message } from 'app/pages/NotFoundPage';
import { ReactComponent as NikeLogo } from 'assets/svgs/logos/nike.svg';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Theme from 'styles/themes/main-theme';
import { Button } from '../commons/Button';
import { messages } from './messages';
import { Content, Title } from './styles';

interface Props {}

export const NewsLetter = memo((props: Props) => {
  const { t } = useTranslation();

  return (
    <Theme>
      <Content>
        <NikeLogo style={{ marginBottom: '1.5rem' }}></NikeLogo>
        <Title>{t(messages.i18nTitle())}</Title>
        <Message>{t(messages.i18nMessage())}</Message>
        <Button label={t(messages.i18nRegisterButtonLabel())}></Button>
      </Content>
    </Theme>
  );
});
