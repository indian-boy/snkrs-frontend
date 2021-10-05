import React, { memo } from 'react';
import Theme from 'styles/themes/main-theme';
import { ButtonWrapper } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  secondary?: boolean;
  onClick?: () => void;
}

export const Button = memo(({ onClick, label, ...props }: Props) => {
  return (
    <Theme>
      <ButtonWrapper onClick={onClick} type="button" {...props}>
        {label}
      </ButtonWrapper>
    </Theme>
  );
});
