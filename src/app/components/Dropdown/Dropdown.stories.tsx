import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown, Option } from '.';

export default {
  title: 'Components/Dropdown',
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
  uniqueId: Math.random().toString(36).substr(2, 13),
  label: 'Dropdown',
  options: [
    { key: 1, selected: false, title: 'Option #1' },
    { key: 2, selected: false, title: 'Option #2' },
  ],
};
