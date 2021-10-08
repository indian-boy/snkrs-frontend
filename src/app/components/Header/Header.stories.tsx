import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
