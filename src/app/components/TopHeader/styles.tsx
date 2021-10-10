import { ReactComponent as JordanLogo } from 'assets/svgs/logos/jordan.svg';
import { ReactComponent as SNKRSLogo } from 'assets/svgs/logos/snkrs.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { media } from 'styles/media';

const Wrapper = styled.div`
  display: none;
  background-color: ${props => props.theme.palette.secondary.s200};

  ${media.medium`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2.5rem;
  `}
`;

const LeftIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CustomizeJordanLogoSvg = (component: typeof JordanLogo) => styled(
  component,
)`
  width: 1.8rem;
  height: 1.8rem;
`;

const JordanLogoCustomized = CustomizeJordanLogoSvg(JordanLogo);

const CustomizeSNKRSLogoSvg = (component: typeof SNKRSLogo) => styled(
  component,
)`
  width: 2.9rem;
  height: 2.9rem;
`;

const SNKRSLogoCustomized = CustomizeSNKRSLogoSvg(SNKRSLogo);

const MainNavLinks = (component: typeof NavLink) => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.s500};
  font-size: 0.75rem;
  line-height: 1.5rem;

  :visited {
    color: ${props => props.theme.palette.secondary.s500};
  }
`;

const TopHeaderNavLink = MainNavLinks(NavLink);

const VerticalLineSeparator = styled.span`
  height: 1.5rem;
  border-left: 1px solid ${props => props.theme.palette.secondary.s500};
`;

export {
  Wrapper,
  LeftIcons,
  RightIcons,
  JordanLogoCustomized,
  SNKRSLogoCustomized,
  TopHeaderNavLink,
  VerticalLineSeparator,
};
