import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchInput } from '.';

export default {
  title: 'Components/SearchInput',
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
