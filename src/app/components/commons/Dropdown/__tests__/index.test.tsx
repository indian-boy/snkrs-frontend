import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Dropdown, Option } from '..';

const DropdownMock = () => {
  const [optionSelectedState, setOptionSelected] = useState<Option>();

  const options = [
    { key: 1, selected: false, title: 'Option #1' },
    { key: 2, selected: false, title: 'Option #2' },
  ];

  return (
    <Dropdown
      optionSelectedState={optionSelectedState}
      setOptionSelected={setOptionSelected}
      label="Dropdown"
      options={options}
    />
  );
};

describe('<Dropdown  />', () => {
  it('should match snapshot', () => {
    const dropdown = render(<DropdownMock></DropdownMock>);
    expect(dropdown.container.firstChild).toMatchSnapshot();
  });
});
