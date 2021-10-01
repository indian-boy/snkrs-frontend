import React, { memo } from 'react';
import styled, { css, ThemeProvider } from 'styled-components/macro';
import { mainTheme } from 'styles/themes/main-theme';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  secondary?: boolean;
  onClick?: () => void;
}

export const Button = memo(({ onClick, label, ...props }: Props) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <ButtonWrapper onClick={onClick} type="button" {...props}>
        {label}
      </ButtonWrapper>
    </ThemeProvider>
  );
});

const ButtonWrapper = styled.button<{ secondary?: boolean }>`
  ${props =>
    css`
      background-color: ${props.theme.palette.primary.default};
      color: ${props.theme.palette.secondary.default};
    `}
  ${props =>
    props.secondary &&
    css`
      background-color: ${props.theme.palette.secondary.default};
      color: ${props.theme.palette.primary.default};
    `}
`;
