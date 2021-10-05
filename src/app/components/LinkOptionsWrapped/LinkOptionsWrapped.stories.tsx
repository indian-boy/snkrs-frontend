import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LinkOptionsWrapped } from '.';

export default {
  title: 'Components/LinkOptionsWrapped',
  component: LinkOptionsWrapped,
  argTypes: {},
} as ComponentMeta<typeof LinkOptionsWrapped>;

const Template: ComponentStory<typeof LinkOptionsWrapped> = args => (
  <div style={{ width: '50%', margin: '0 auto' }}>
    <LinkOptionsWrapped {...args} />
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
