import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LinksDropdown } from '.';

export default {
  title: 'Components/LinksDropdown',
  component: LinksDropdown,
  argTypes: {},
} as ComponentMeta<typeof LinksDropdown>;

const Template: ComponentStory<typeof LinksDropdown> = args => (
  <div style={{ width: '50%', margin: '0 auto' }}>
    <LinksDropdown {...args} />
  </div>
);

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
