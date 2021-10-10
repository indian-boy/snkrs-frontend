import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { NewsLetter } from '.';

export default {
  title: 'Components/NewsLetter',
  component: NewsLetter,
  argTypes: {},
} as ComponentMeta<typeof NewsLetter>;

const Template: ComponentStory<typeof NewsLetter> = args => {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <NewsLetter {...args} />
    </Provider>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
