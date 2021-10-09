import { render } from '@testing-library/react';
import { Option } from 'app/components';
import React, { useState } from 'react';
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

const shoppingStoresMock: ShoppingStore[] = [
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
    distance: 1000,
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
    distance: 1000,
  },
];

const ShoppingStoresMockParent = () => {
  const [, setShoppingStoreSelected] = React.useState<ShoppingStore | null>(
    shoppingStoresMock[0],
  );

  const filterOptions = [
    { key: 1, title: 'Filter #1' },
    { key: 2, title: 'Filter #2' },
  ];

  const [filterOptionSelectedState, setFilterOptionSelected] = useState<Option>(
    filterOptions[0],
  );

  return (
    <ShoppingStoresList
      filterOptions={filterOptions}
      filterOptionSelectedState={filterOptionSelectedState}
      setFilterOptionSelected={setFilterOptionSelected}
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
