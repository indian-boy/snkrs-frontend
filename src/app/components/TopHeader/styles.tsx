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

const CustomizeSvg = (
  component,
  customProps: {
    height: string;
    width: string;
  },
) => styled(component)`
  width: ${customProps.width};
  height: ${customProps.height};
`;

const JordanLogoCustomized = CustomizeSvg(JordanLogo, {
  height: '1.6rem',
  width: '1.6rem',
});

const SNKRSLogoCustomized = CustomizeSvg(SNKRSLogo, {
  height: '1rem',
  width: '2.9rem',
});

const MainNavLinks = (component: typeof NavLink) => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.s500};
  font-size: 0.75rem;
  line-height: 0;

  :visited {
    color: ${props => props.theme.palette.secondary.s500};
  }
`;

const TopHeaderNavLink = MainNavLinks(NavLink);

const VerticalLineSeparator = styled.span`
  height: 100%;
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
