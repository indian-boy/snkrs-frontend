import { render } from '@testing-library/react';
import * as React from 'react';
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

const shoppingStoreData = {
  id: 1,
  placeName: 'Avenida paulista',
  address: {
    latitude: 0,
    longitude: 0,
    location: 'Avenida Paulista, 1227 - Bela Vista São Paulo - SP, 01311-200',
  },
  availability: 4,
  serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
};

describe('<ShoppingStoreCard  />', () => {
  it('should match snapshot', () => {
    const shoppingStoreCard = render(
      <ShoppingStoreCard {...shoppingStoreData} />,
    );

    expect(shoppingStoreCard.container.firstChild).toMatchSnapshot();
  });
});
