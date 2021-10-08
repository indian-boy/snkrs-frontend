import React, { memo } from 'react';
import Theme from 'styles/themes/main-theme';
import { CloseIconButton, Label, SearchInputWrapper } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'search';
  placeholder?: string;
  showSearchIcon?: boolean;
  showCloseIcon?: boolean;
  isRounded?: boolean;
  noBorders?: boolean;
  secondary?: boolean;
  hidden?: boolean;
}

export const SearchInput = memo(
  ({
    hidden = false,
    placeholder,
    type,
    showSearchIcon,
    showCloseIcon,
    ...props
  }: Props) => {
    const ref = React.useRef<HTMLInputElement>(null);

    const clearSearch = () => {
      if (ref.current) {
        ref.current.value = '';
      }
    };

    return (
      <Theme>
        {!hidden && (
          <Label showSearchIcon={showSearchIcon}>
            {showCloseIcon && (
              <CloseIconButton onClick={() => clearSearch()}></CloseIconButton>
            )}
            <SearchInputWrapper
              placeholder={placeholder}
              ref={ref}
              showSearchIcon={showSearchIcon}
              type={type}
              {...props}
            ></SearchInputWrapper>
          </Label>
        )}
      </Theme>
    );
  },
);
