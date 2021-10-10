import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import styled from 'styled-components/macro';
import ThemeProviderWrapper from 'styles/themes/themeProvider';
import { ShoppingStoreCard } from '.';

export default {
  title: 'Components/ShoppingStoreCard',
  component: ShoppingStoreCard,
  argTypes: {},
} as ComponentMeta<typeof ShoppingStoreCard>;

const Template: ComponentStory<typeof ShoppingStoreCard> = args => (
  <ThemeProviderWrapper>
    <Wrapper>
      <ShoppingStoreCard {...args} />
    </Wrapper>
  </ThemeProviderWrapper>
);

const Wrapper = styled.div`
  width: 20rem;
  padding: 1rem;
  border-radius: 0.625rem;
  background-color: ${props => props.theme.palette.secondary.s200};
`;

export const Primary = Template.bind({});

Primary.args = {
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
  distance: 1000,
};
