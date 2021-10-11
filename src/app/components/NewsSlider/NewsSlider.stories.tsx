import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { NewsSlider } from '.';

export default {
  title: 'Components/NewsSlider',
  component: NewsSlider,
  argTypes: {},
} as ComponentMeta<typeof NewsSlider>;

const Template: ComponentStory<typeof NewsSlider> = args => {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <NewsSlider {...args} />
    </Provider>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
