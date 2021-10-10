import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Button } from '.';

export default {
  title: 'Components/Commons/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <Button {...args} />
    </Provider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'Label',
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'Label',
  disabled: true,
};
