import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { CommonUsedAttributes } from 'types';
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

const renderComponentWithProviders = (
  props: Parameters<typeof Footer>[number] & CommonUsedAttributes,
  store: Store,
) =>
  render(
    <Provider store={store}>
      <Footer {...props} />
    </Provider>,
  );

describe('<Footer  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = renderComponentWithProviders(
      {
        'data-testid': 'footerID',
      },
      store,
    );

    const footerElement = getByTestId('footerID');

    expect(footerElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
