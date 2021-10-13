import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { CommonUsedAttributes } from 'types';
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

const renderComponentWithProviders = (
  props: Parameters<typeof TopHeader>[number] & CommonUsedAttributes,
  store: Store,
) =>
  render(
    <Provider store={store}>
      <TopHeader {...props} />
    </Provider>,
  );

describe('<TopHeader  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = renderComponentWithProviders(
      {
        'data-testid': 'topHeaderID',
      },
      store,
    );

    const topHeaderElement = getByTestId('topHeaderID');

    expect(topHeaderElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
