import React, { memo } from 'react';
import Theme from 'styles/themes/main-theme';
import { CloseIconButton, Label, SearchInputWrapper } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'search';
  showSearchIcon?: boolean;
  showCloseIcon?: boolean;
  isRounded?: boolean;
  secondary?: boolean; // TODO
}

export const SearchInput = memo(
  ({ secondary, type, showSearchIcon, showCloseIcon, ...props }: Props) => {
    const ref = React.useRef<HTMLInputElement>(null);

    const clearSearch = () => {
      if (ref.current) {
        ref.current.value = '';
      }
    };

    return (
      <Theme>
        <Label showSearchIcon={showSearchIcon}>
          {showCloseIcon && (
            <CloseIconButton onClick={() => clearSearch()}></CloseIconButton>
          )}
          <SearchInputWrapper
            ref={ref}
            showSearchIcon={showSearchIcon}
            type={type}
            {...props}
          ></SearchInputWrapper>
        </Label>
      </Theme>
    );
  },
);
