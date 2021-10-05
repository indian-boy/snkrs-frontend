import React, { memo } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import Theme from 'styles/themes/main-theme';

interface Links {
  label: string;
  url: string;
}

interface Props {
  title: string;
  links?: Links[];
}

export const LinkOptionsWrapped = memo(({ title, links }: Props) => {
  return (
    <BrowserRouter>
      <Theme>
        <Details>
          <Summary>
            {title}
            <Icon className="icon"></Icon>
          </Summary>
          <Options>
            {links &&
              links.map((link, index) => (
                <StyledNavLink key={index} to={link.url}>
                  {link.label}
                </StyledNavLink>
              ))}
          </Options>
        </Details>
      </Theme>
    </BrowserRouter>
  );
});

const Details = styled.details`
  width: 100%;
  background: ${props => props.theme.palette.primary.default};
  overflow: hidden;
  position: relative;
  color: ${props => props.theme.palette.secondary.default};
  padding-bottom: 1rem;

  &[open] > summary {
    .icon:after {
      transform: rotate(90deg);
    }
  }
`;

const Summary = styled.summary`
  display: block;
  background: ${props => props.theme.palette.primary.default};
  padding: 1rem 3rem 1rem 1rem;
  position: relative;
  cursor: pointer;

  &:before {
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
    background: ${props => props.theme.palette.secondary.default};
    transition: 0.2s all ease-in-out;
  }

  &:before {
    top: 50%;
    left: calc(100% - 2rem);
    right: 0.7rem;
    height: 0.1rem;
    transform: translateY(-50%);
  }

  &:after {
    top: 1rem;
    right: 1.3rem;
    bottom: 0.9rem;
    width: 0.1rem;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
`;

const withLinkStyles = component => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.default};

  :visited {
    color: ${props => props.theme.palette.secondary.s300};
  }
`;

const StyledNavLink = withLinkStyles(NavLink);
