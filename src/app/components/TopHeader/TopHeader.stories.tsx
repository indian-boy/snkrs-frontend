import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { TopHeader } from '.';

export default {
  title: 'Components/TopHeader',
  component: TopHeader,
  argTypes: {},
} as ComponentMeta<typeof TopHeader>;

const Template: ComponentStory<typeof TopHeader> = args => {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <TopHeader {...args} />
    </Provider>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
