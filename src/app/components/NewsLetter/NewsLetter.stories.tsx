import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NewsLetter } from '.';

export default {
  title: 'Components/NewsLetter',
  component: NewsLetter,
  argTypes: {},
} as ComponentMeta<typeof NewsLetter>;

const Template: ComponentStory<typeof NewsLetter> = args => (
  <NewsLetter {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
