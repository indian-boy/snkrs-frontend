import { render } from '@testing-library/react';
import React from 'react';
import { Footer } from '..';

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

describe('<Footer  />', () => {
  it('should match snapshot', () => {
    const footer = render(<Footer />);
    expect(footer.container.firstChild).toMatchSnapshot();
  });
});
