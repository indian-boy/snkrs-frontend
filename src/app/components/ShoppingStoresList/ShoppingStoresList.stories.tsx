import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import styled from 'styled-components/macro';
import { ShoppingStoresList } from '.';

export default {
  title: 'Components/ShoppingStoresList',
  component: ShoppingStoresList,
  argTypes: {},
} as ComponentMeta<typeof ShoppingStoresList>;

const Template: ComponentStory<typeof ShoppingStoresList> = args => (
  <Wrapper>
    <ShoppingStoresList {...args} />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 320px;
`;

export const Primary = Template.bind({});

Primary.args = {
  shoppingStores: [
    {
      id: 1,
      placeName: 'Avenida paulista',
      address: {
        latitude: -23.5639655,
        longitude: -46.6560802,
        location:
          'Avenida Paulista, 1227 - Bela Vista São Paulo - SP, 01311-200',
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
  ],
};
