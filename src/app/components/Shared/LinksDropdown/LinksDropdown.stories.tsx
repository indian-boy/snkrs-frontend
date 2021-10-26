import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { LinksDropdown } from '.';

export default {
  title: 'Components/LinksDropdown',
  component: LinksDropdown,
  argTypes: {},
} as ComponentMeta<typeof LinksDropdown>;

const Template: ComponentStory<typeof LinksDropdown> = args => {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <div style={{ width: '50%', margin: '0 auto' }}>
        <LinksDropdown {...args} />
      </div>
    </Provider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  title: 'Help',
  links: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'y',
      url: '/y',
    },
  ],
};
