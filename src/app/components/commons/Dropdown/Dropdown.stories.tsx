import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Dropdown, Option } from '.';

export default {
  title: 'Components/Commons/Dropdown',
  component: Dropdown,
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => {
  const [optionSelectedState, setOptionSelected] = useState<Option>();

  return (
    <Dropdown
      {...args}
      optionSelectedState={optionSelectedState}
      setOptionSelected={setOptionSelected}
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'Dropdown',
  options: [
    { key: 1, title: 'Option #1' },
    { key: 2, title: 'Option #2' },
  ],
};
