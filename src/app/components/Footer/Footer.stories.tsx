import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Footer } from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => {
  const store = configureAppStore();
  return (
    <Provider store={store}>
      <Footer {...args} />
    </Provider>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
