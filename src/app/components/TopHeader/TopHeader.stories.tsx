import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TopHeader } from '.';

export default {
  title: 'Components/TopHeader',
  component: TopHeader,
  argTypes: {},
} as ComponentMeta<typeof TopHeader>;

const Template: ComponentStory<typeof TopHeader> = args => (
  <TopHeader {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
