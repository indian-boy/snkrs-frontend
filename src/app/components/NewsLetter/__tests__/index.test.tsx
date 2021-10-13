import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { CommonUsedAttributes } from 'types';
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

const renderComponentWithProviders = (
  props: Parameters<typeof NewsLetter>[number] & CommonUsedAttributes,
  store: Store,
) =>
  render(
    <Provider store={store}>
      <NewsLetter {...props} />
    </Provider>,
  );

describe('<NewsLetter  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = renderComponentWithProviders(
      {
        'data-testid': 'newsLetterID',
      },
      store,
    );

    const newsLetterElement = getByTestId('newsLetterID');

    expect(newsLetterElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
