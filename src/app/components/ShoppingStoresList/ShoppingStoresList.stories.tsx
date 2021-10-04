import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ShoppingStoresList } from '.';
import styled from 'styled-components/macro';

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

Primary.args = {};
