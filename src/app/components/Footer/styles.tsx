import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  padding: 2rem 1rem;
  background: ${props => props.theme.palette.primary.default};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.palette.primary.p600};
`;

const withLinkStyles = component => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.default};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;

  :visited {
    color: ${props => props.theme.palette.secondary.s300};
  }
`;

const StyledNavLink = withLinkStyles(NavLink);

const LinkWrapper = styled.div`
  padding-bottom: 1rem;
`;

export { Wrapper, Links, StyledNavLink, LinkWrapper };
