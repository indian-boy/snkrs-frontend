import { ReactComponent as BagIcon } from 'assets/svgs/icons/bag.svg';
import { ReactComponent as HamburguerMenuIcon } from 'assets/svgs/icons/hamburger_menu.svg';
import { ReactComponent as NikeLogo } from 'assets/svgs/logos/nike.svg';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { media } from 'styles/media';
import { SearchInput } from '..';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;

  ${media.medium`
    padding: 1rem 2.5rem;
  `}
`;

const LeftSideWrapper = styled.div``;

const CenterWrapper = styled.div`
  display: none;

  ${media.medium`
    display: flex;
    gap: 1.5rem;
  `}
`;

const RightSideWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.875rem;
`;

const CustomizeSvg = (
  component,
  customProps: {
    size: string;
    desktopSize?: string;
    hideDesktop?: boolean;
    clickable?: boolean;
  },
) => styled(component)`
  width: ${customProps.size};
  height: ${customProps.size};

  ${customProps.desktopSize &&
  media.medium`
    width: ${customProps.desktopSize};
    height: ${customProps.desktopSize};
  `};

  ${customProps.hideDesktop &&
  media.medium`
      display: none;
    `}

  ${customProps.clickable &&
  css`
    cursor: pointer; ;
  `}
`;

const NikeLogoCustomized = CustomizeSvg(NikeLogo, {
  size: '2.5rem',
  desktopSize: '3.75rem',
  clickable: true,
});

const BagIconCustomized = CustomizeSvg(BagIcon, {
  size: '1.7rem',
  clickable: true,
});

const HamburguerMenuIconCustomized = CustomizeSvg(HamburguerMenuIcon, {
  size: '2rem',
  hideDesktop: true,
  clickable: true,
});

const SearchInputCustomized = (component: typeof SearchInput) => styled(
  component,
)`
  display: none;

  ${media.medium`
    display: block;
  `}
`;

const HeaderSearchInput = SearchInputCustomized(SearchInput);

const HeaderLinksCustomized = component => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.primary.default};
  font-size: 1rem;
  line-height: 1.5rem;
  white-space: nowrap;
  font-weight: bold;

  :visited {
    color: ${props => props.theme.palette.primary.p700};
  }
`;

const HeaderLink = HeaderLinksCustomized(NavLink);

export {
  Wrapper,
  LeftSideWrapper,
  CenterWrapper,
  RightSideWrapper,
  NikeLogoCustomized,
  BagIconCustomized,
  HamburguerMenuIconCustomized,
  HeaderSearchInput,
  HeaderLink,
};
