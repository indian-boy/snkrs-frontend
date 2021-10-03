import React, { useState } from 'react';
import { render } from '@testing-library/react';
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
      uniqueId="su5a1ankyxg"
      label="Dropdown"
      options={options}
    />
  );
};

describe('<Dropdown  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<DropdownMock></DropdownMock>);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
