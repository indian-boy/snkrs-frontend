import { render } from '@testing-library/react';
import * as React from 'react';
import { LinksDropdown } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

const mockData = {
  title: 'Help',
  links: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'y',
      url: '/y',
    },
  ],
};

describe('<LinksDropdown  />', () => {
  it('should match snapshot', () => {
    const linksDropdown = render(<LinksDropdown {...mockData} />);
    expect(linksDropdown.container.firstChild).toMatchSnapshot();
  });
});
