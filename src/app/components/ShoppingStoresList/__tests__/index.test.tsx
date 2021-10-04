import { render } from '@testing-library/react';
import * as React from 'react';
import { ShoppingStoresList } from '..';

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

describe('<ShoppingStoresList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ShoppingStoresList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
