import { ReactComponent as NikeLogo } from 'assets/svgs/logos/nike.svg';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import Theme from 'styles/themes/main-theme';
import { Button } from '../commons/Button';
import { messages } from './messages';

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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette.secondary.s200};
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`;

const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.2rem;
  color: ${props => props.theme.palette.primary.p700};
  margin-bottom: 0.5rem;
`;

const Message = styled.span`
  font-style: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${props => props.theme.palette.primary.p700};
  margin-bottom: 1rem;
`;
