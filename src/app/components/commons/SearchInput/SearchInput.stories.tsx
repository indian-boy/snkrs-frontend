import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SearchInput } from '.';

export default {
  title: 'Components/Commons/SearchInput',
  component: SearchInput,
  argTypes: {},
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = args => (
  <SearchInput {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  type: 'search',
  placeholder: 'Placeholder',
  showSearchIcon: true,
  isRounded: true,
};
