import { render } from '@testing-library/react';
import React from 'react';
import { NewsLetter } from '..';

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

describe('<NewsLetter  />', () => {
  it('should match snapshot', () => {
    const newsLetter = render(<NewsLetter />);
    expect(newsLetter.container.firstChild).toMatchSnapshot();
  });
});
