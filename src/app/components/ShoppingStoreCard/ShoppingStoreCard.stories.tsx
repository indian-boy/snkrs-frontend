import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import styled from 'styled-components/macro';
import Theme from 'styles/themes/main-theme';
import { ShoppingStoreCard } from '.';

export default {
  title: 'Components/ShoppingStoreCard',
  component: ShoppingStoreCard,
  argTypes: {},
} as ComponentMeta<typeof ShoppingStoreCard>;

const Template: ComponentStory<typeof ShoppingStoreCard> = args => (
  <Theme>
    <Wrapper>
      <ShoppingStoreCard {...args} />
    </Wrapper>
  </Theme>
);

const Wrapper = styled.div`
  width: 320px;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.palette.secondary.s200};
`;

export const Primary = Template.bind({});

Primary.args = {
  id: 1,
  placeName: 'Avenida paulista',
  address: {
    latitude: 0,
    longitude: 0,
    street: 'Avenida Paulista, 1227 - Bela Vista São Paulo - SP, 01311-200',
  },
  availability: 4,
  serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
};
