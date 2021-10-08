import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Option } from 'app/components';
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { ShoppingStore } from 'types';
import { ShoppingStoresList } from '.';

export default {
  title: 'Components/ShoppingStoresList',
  component: ShoppingStoresList,
  argTypes: {},
} as ComponentMeta<typeof ShoppingStoresList>;

const Template: ComponentStory<typeof ShoppingStoresList> = args => {
  const [, setShoppingStoreSelected] = useState<ShoppingStore | null>(null);

  const filterOptions = [
    { key: 1, title: 'Filter #1' },
    { key: 2, title: 'Filter #2' },
  ];

  const [filterOptionSelected, setFilterOptionSelected] = useState<Option>(
    filterOptions[0],
  );

  return (
    <Wrapper>
      <ShoppingStoresList
        {...args}
        filterOptions={filterOptions}
        filterOptionSelected={filterOptionSelected}
        setFilterOptionSelected={setFilterOptionSelected}
        setShoppingStoreSelected={setShoppingStoreSelected}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20rem;
`;

export const Primary = Template.bind({});

Primary.args = {
  shoppingStores: [
    {
      id: 1,
      placeName: 'Nike Store Oscar Freire',
      address: {
        latitude: -23.562692,
        longitude: -46.6695949,
        location:
          'R. Oscar Freire, 969 - Jardim Paulista, São Paulo - SP, 01426-001',
      },
      availability: 4,
      serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
    },
    {
      id: 2,
      placeName: 'Shopping Light',
      address: {
        latitude: -23.54669465,
        longitude: -46.638584442469444,
        location:
          'R. Cel. Xavier de Toledo, 23 - Centro Histórico de São Paulo, São Paulo - SP, 01048-000',
      },
      availability: 6,
      serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
    },
    {
      id: 2,
      placeName: 'Nike Store Shopping Higienópolis',
      address: {
        latitude: -23.542123699999998,
        longitude: -46.657392921521144,
        location:
          'Avenida Higienópolis, 618 - 127 a 129 - Higienópolis, São Paulo - SP, 01238-000',
      },
      availability: 2,
      serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
    },
  ],
};
