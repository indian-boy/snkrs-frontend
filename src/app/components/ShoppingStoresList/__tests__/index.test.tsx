import { render } from '@testing-library/react';
import React from 'react';
import { ShoppingStore } from 'types';
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

const shoppingStoresMock = [
  {
    id: 1,
    placeName: 'Avenida paulista',
    address: {
      latitude: -23.5639655,
      longitude: -46.6560802,
      location: 'Avenida Paulista, 1227 - Bela Vista São Paulo - SP, 01311-200',
    },
    availability: 4,
    serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
  },
  {
    id: 2,
    placeName: 'Regus',
    address: {
      latitude: -23.5469643,
      longitude: -46.7624297,
      location:
        'Rua Werner Von Siemens, 111 - Lapa de Baixo, São Paulo - SP, 05069-010',
    },
    availability: 6,
    serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
  },
];

const ShoppingStoresMockParent = () => {
  const [, setShoppingStoreSelected] = React.useState<ShoppingStore | null>(
    shoppingStoresMock[0],
  );

  return (
    <ShoppingStoresList
      setShoppingStoreSelected={setShoppingStoreSelected}
      shoppingStores={shoppingStoresMock}
    />
  );
};

describe('<ShoppingStoresList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ShoppingStoresMockParent />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
