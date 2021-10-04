import { render } from '@testing-library/react';
import * as React from 'react';
import { SearchInput } from '..';

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

describe('<SearchInput  />', () => {
  it('should match snapshot', () => {
    const searchInput = render(<SearchInput type="search" />);
    expect(searchInput.container.firstChild).toMatchSnapshot();
  });
});
