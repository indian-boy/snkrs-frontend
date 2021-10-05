import React, { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Theme from 'styles/themes/main-theme';
import { Details, Icon, Options, StyledNavLink, Summary } from './styles';

export interface Link {
  label: string;
  url: string;
}

interface Props {
  title: string;
  links?: Link[];
}

export const LinksDropdown = memo(({ title, links }: Props) => {
  return (
    <BrowserRouter>
      <Theme>
        <Details>
          <Summary>
            {title}
            <Icon></Icon>
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
