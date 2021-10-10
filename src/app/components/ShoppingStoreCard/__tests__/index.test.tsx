import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { CommonUsedAttributes } from 'types';
import { ShoppingStoreCard } from '..';

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

const shoppingStoreMock = {
  id: 1,
  placeName: 'Avenida paulista',
  address: {
    latitude: 0,
    longitude: 0,
    location: 'Avenida Paulista, 1227 - Bela Vista São Paulo - SP, 01311-200',
  },
  availability: 4,
  serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
  distance: 1000,
};

const renderWithProviders = (
  props: Parameters<typeof ShoppingStoreCard>[number] & CommonUsedAttributes,
  store: Store,
) =>
  render(
    <Provider store={store}>
      <ShoppingStoreCard {...props} />
    </Provider>,
  );

describe('<ShoppingStoreCard  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = renderWithProviders(
      {
        'data-testid': 'shoppingStoreCardID',
        ...shoppingStoreMock,
      },
      store,
    );

    const shoppingStoreCardElement = getByTestId('shoppingStoreCardID');

    expect(shoppingStoreCardElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
