import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { CommonUsedAttributes } from 'types';
import { Header } from '..';

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

const renderWithProviders = (
  props: Parameters<typeof Header>[number] & CommonUsedAttributes,
  store: Store,
) =>
  render(
    <Provider store={store}>
      <Header {...props} />
    </Provider>,
  );

describe('<Header  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = renderWithProviders(
      {
        'data-testid': 'headerID',
      },
      store,
    );

    const headerElement = getByTestId('headerID');

    expect(headerElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
