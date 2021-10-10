import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <Header {...args} />
    </Provider>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
