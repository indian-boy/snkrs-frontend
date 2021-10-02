import React, { memo } from 'react';
import styled, { css, ThemeProvider } from 'styled-components/macro';

import { mainTheme } from 'styles/themes/main-theme';
import { ConvertHexToRGBA } from 'utils/helpers';

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
  padding: 0.9rem 1.5rem;
  border-radius: 3.125rem;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  outline: none;
  text-align: center;
  text-decoration: none;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;

  :focus,
  :active {
    outline: none;
  }

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}

  ${props =>
    !props.disabled &&
    css`
      background-color: ${props.theme.palette.primary.default};
      color: ${props.theme.palette.secondary.default};
      box-shadow: 0px 0.2rem 0.5rem
        ${ConvertHexToRGBA(props.theme.palette.primary.default, 0.1)};

      :hover,
      :focus,
      :active {
        background-color: ${props.theme.palette.secondary.default};
        color: ${props.theme.palette.primary.default};
        transform: translateY(-1px);
      }
    `}
  ${props =>
    props.secondary &&
    !props.disabled &&
    css`
      background-color: ${props.theme.palette.secondary.default};
      color: ${props.theme.palette.primary.default};
      box-shadow: 0px 0.2rem 0.5rem
        ${ConvertHexToRGBA(props.theme.palette.primary.default, 0.1)};

      :hover,
      :focus,
      :active {
        background-color: ${props.theme.palette.primary.default};
        color: ${props.theme.palette.secondary.default};
        transform: translateY(-1px);
      }
    `};
`;
