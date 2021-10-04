import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from '.';

export default {
  title: 'Components/Commons/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Label',
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'Label',
  disabled: true,
};
