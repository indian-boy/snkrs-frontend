import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { SearchInput } from '.';

export default {
  title: 'Components/Commons/SearchInput',
  component: SearchInput,
  argTypes: {},
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = args => {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <SearchInput {...args} />
    </Provider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  type: 'search',
  placeholder: 'Placeholder',
  showSearchIcon: true,
  isRounded: true,
};
