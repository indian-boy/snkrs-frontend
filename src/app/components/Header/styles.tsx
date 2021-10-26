import { ReactComponent as BagIcon } from 'assets/svgs/icons/bag.svg';
import { ReactComponent as HamburguerMenuIcon } from 'assets/svgs/icons/hamburger_menu.svg';
import { ReactComponent as NikeLogo } from 'assets/svgs/logos/nike.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { SearchInput } from '../Shared';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;

  ${media.medium`
    padding: 1rem 2.5rem;
  `}
`;

const LeftSideWrapper = styled.div`
  width: 100%;
  margin-right: 1rem;
`;

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
  gap: 1rem;
  justify-content: end;
  width: 100%;
  margin-left: 1rem;
`;

const CustomizeNikeSvg = (component: typeof NikeLogo) => styled(component)`
  width: 2.5rem;
  height: 2rem;
  cursor: pointer;

  ${media.medium`
    width: 3.5rem;
  `}
`;

const NikeLogoCustomized = CustomizeNikeSvg(NikeLogo);

const CustomizeBagSvg = (component: typeof BagIcon) => styled(component)`
  width: 1.7rem;
  height: 1.7rem;
  cursor: pointer;
`;

const BagIconCustomized = CustomizeBagSvg(BagIcon);

const CustomizeHamburguerMenuSvg = (
  component: typeof HamburguerMenuIcon,
) => styled(component)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  ${media.medium`
    display:none;
  `}
`;

const HamburguerMenuIconCustomized =
  CustomizeHamburguerMenuSvg(HamburguerMenuIcon);

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
