import * as React from 'react';
import { render } from '@testing-library/react';

import { TopHeader } from '..';

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

describe('<TopHeader  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<TopHeader />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
