import React, { memo } from 'react';
import styled, { css, ThemeProvider } from 'styled-components/macro';

import { mainTheme } from 'styles/themes/main-theme';
import MagnifierIcon from 'assets/svgs/icons/magnifier.svg';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'search';
  secondary?: boolean; // TODO
}

export const SearchInput = memo(({ secondary, type, ...props }: Props) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <LabelWrapper>
        <SearchInputWrapper type={type} {...props}></SearchInputWrapper>
      </LabelWrapper>
    </ThemeProvider>
  );
});

const LabelWrapper = styled.label`
  position: relative;

  ::before {
    position: absolute;
    content: '';
    background-image: url(${MagnifierIcon});
    background-repeat: no-repeat;
    background-position: center;
    width: 1rem;
    height: 1rem;
    z-index: 10000;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const SearchInputWrapper = styled.input`
  font-size: 1rem;
  padding: 0.85rem 2.5rem;
  outline: none;
  border-radius: 3.125rem;

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  ${props =>
    css`
      background-color: ${props.theme.palette.secondary.default};
      border: 1px solid ${props.theme.palette.secondary.s300};
      color: ${props.theme.palette.secondary.s500};
      ::placeholder {
        color: ${props.theme.palette.secondary.s500};
        opacity: 1;
      }

      :-ms-input-placeholder {
        color: ${props.theme.palette.secondary.s500};
      }

      ::-ms-input-placeholder {
        color: ${props.theme.palette.secondary.s500};
      }
    `}
`;
