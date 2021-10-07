import CloseIcon from 'assets/svgs/icons/close.svg';
import MagnifierIcon from 'assets/svgs/icons/magnifier.svg';
import styled, { css } from 'styled-components';

const Label = styled.label<{ showSearchIcon?: boolean }>`
  position: relative;

  ${props =>
    props.showSearchIcon &&
    css`
      ::before {
        position: absolute;
        content: '';
        background-image: url(${MagnifierIcon});
        background-repeat: no-repeat;
        background-position: center;
        width: 1rem;
        height: 1rem;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
      }
    `}
`;

const CloseIconButton = styled.span<{ showSearchIcon?: boolean }>`
  cursor: pointer;
  position: absolute;
  content: '';
  background-image: url(${CloseIcon});
  background-repeat: no-repeat;
  background-position: center;
  width: 1rem;
  height: 1rem;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchInputWrapper = styled.input<{
  showSearchIcon?: boolean;
  isRounded?: boolean;
  noBorders?: boolean;
}>`
  font-size: 1rem;
  padding: 0.9rem 2.5rem 0.9rem 0.5rem;
  outline: none;

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  background-color: ${props => props.theme.palette.secondary.default};
  border: 1px solid ${props => props.theme.palette.secondary.s300};
  color: ${props => props.theme.palette.secondary.s500};

  ::placeholder {
    color: ${props => props.theme.palette.secondary.s500};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${props => props.theme.palette.secondary.s500};
  }

  ${props =>
    props.isRounded &&
    css`
      border-radius: 3.125rem;
    `};

  ${props =>
    props.showSearchIcon &&
    css`
      padding: 0.85rem 2.5rem;
    `};

  ${props =>
    props.noBorders &&
    css`
      border: none;
    `};
`;

export { Label, CloseIconButton, SearchInputWrapper };
