import { render } from '@testing-library/react';
import * as React from 'react';
import { LinkOptionsWrapped } from '..';

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

describe('<LinkOptionsWrapped  />', () => {
  it('should match snapshot', () => {
    const linkOptionsWrapped = render(<LinkOptionsWrapped {...mockData} />);
    expect(linkOptionsWrapped.container.firstChild).toMatchSnapshot();
  });
});
