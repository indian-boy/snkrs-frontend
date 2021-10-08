import { render } from '@testing-library/react';
import React from 'react';
import { Button } from '..';

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

describe('<Button  />', () => {
  it('should match snapshot', () => {
    const button = render(<Button label="Label" />);
    expect(button.container.firstChild).toMatchSnapshot();
  });
});
