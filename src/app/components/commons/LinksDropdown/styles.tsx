import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const Details = styled.details`
  width: 100%;
  background: ${props => props.theme.palette.primary.default};
  overflow: hidden;
  position: relative;
  color: ${props => props.theme.palette.secondary.default};

  &[open] > summary {
    &:before {
      background: ${props => props.theme.palette.secondary.default};
    }

    &:after {
      background: ${props => props.theme.palette.secondary.s300};
    }

    span:after {
      transform: rotate(90deg);
    }
  }
`;

const Summary = styled.summary`
  display: block;
  background: ${props => props.theme.palette.primary.default};
  padding: 1rem 3rem 1rem 0;
  position: relative;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-transform: uppercase;

  &:before {
    content: '';
    background: ${props => props.theme.palette.secondary.s300};
    position: absolute;
    top: 0;
    height: 1px;
    width: calc(100% - 2.5rem);
    left: 0;
  }

  &:after {
    content: '';
    background: ${props => props.theme.palette.secondary.default};
    position: absolute;
    bottom: 0;
    height: 1px;
    width: calc(100% - 2.5rem);
    left: 0;
  }

  ::-webkit-details-marker {
    display: none;
  }
`;

const Icon = styled.span`
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: 0.2s all ease-in-out;
  }

  &:before {
    top: calc(1px - -50%);
    left: calc(100% - 2rem);
    right: 0.7rem;
    height: 0.1rem;
    background: ${props => props.theme.palette.secondary.s300};
  }

  &:after {
    top: 1.2rem;
    right: 1.3rem;
    bottom: 1rem;
    width: 0.1rem;
    background: ${props => props.theme.palette.secondary.default};
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 1.5rem;
`;

const withLinkStyles = component => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.s200};
  font-size: 0.75rem;
  line-height: 1.5rem;
  :visited {
    color: ${props => props.theme.palette.secondary.s300};
  }
`;

const StyledNavLink = withLinkStyles(NavLink);

export { Details, Summary, Icon, Options, StyledNavLink };
