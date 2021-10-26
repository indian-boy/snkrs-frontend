import React, { memo } from 'react';
import ThemeProviderWrapper from 'styles/themes/themeProvider';
import { ButtonWrapper } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  secondary?: boolean;
  onClick?: () => void;
}

export const Button = memo(({ onClick, label, ...props }: Props) => {
  return (
    <ThemeProviderWrapper>
      <ButtonWrapper onClick={onClick} type="button" {...props}>
        {label}
      </ButtonWrapper>
    </ThemeProviderWrapper>
  );
});
