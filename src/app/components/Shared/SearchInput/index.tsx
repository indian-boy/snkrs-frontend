import React, { memo } from 'react';
import ThemeProviderWrapper from 'styles/themes/themeProvider';
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
      /* istanbul ignore else */
      if (ref.current) {
        ref.current.value = '';
      }
    };

    return (
      <ThemeProviderWrapper>
        {!hidden && (
          <Label showSearchIcon={showSearchIcon}>
            {showCloseIcon && (
              <CloseIconButton role="clear" onClick={() => clearSearch()} />
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
      </ThemeProviderWrapper>
    );
  },
);
