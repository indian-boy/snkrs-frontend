import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Dropdown, Option } from '.';

export default {
  title: 'Components/Commons/Dropdown',
  component: Dropdown,
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => {
  const store = configureAppStore();

  const options = [
    { key: 1, title: 'Option #1' },
    { key: 2, title: 'Option #2' },
  ];

  const [optionSelectedState, setOptionSelected] = useState<Option | undefined>(
    options[0],
  );

  return (
    <Provider store={store}>
      <Dropdown
        {...args}
        optionSelectedState={optionSelectedState}
        setOptionSelected={setOptionSelected}
        options={options}
      />
    </Provider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'Dropdown',
};
