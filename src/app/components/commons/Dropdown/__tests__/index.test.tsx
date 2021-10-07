import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Dropdown, Option } from '..';

const DropdownMockParent = () => {
  const options = [
    { key: 1, title: 'Option #1' },
    { key: 2, title: 'Option #2' },
  ];

  const [optionSelectedState, setOptionSelected] = useState<Option>(options[0]);

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
    const dropdown = render(<DropdownMockParent />);
    expect(dropdown.container.firstChild).toMatchSnapshot();
  });
});
