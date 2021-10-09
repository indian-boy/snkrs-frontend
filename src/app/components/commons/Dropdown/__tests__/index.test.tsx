import { fireEvent, render } from '@testing-library/react';
import React, { useState } from 'react';
import { Dropdown, Option } from '..';

const options = [
  { key: 1, title: 'Option #1' },
  { key: 2, title: 'Option #2' },
];

const DropdownWithMockedParent = () => {
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

const DropdownWithMockedParentAndNoCurrentSelectedOption = () => {
  const [_optionSelectedState, setOptionSelected] = useState<Option>(
    options[0],
  );

  return (
    <Dropdown
      setOptionSelected={setOptionSelected}
      label="Dropdown"
      options={options}
    />
  );
};

describe('<Dropdown />', () => {
  it('should match snapshot', () => {
    const { getByTestId, container } = render(<DropdownWithMockedParent />);

    const dropdownElement = getByTestId('dropdownID');

    expect(dropdownElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display first selected option by default', () => {
    const { getByText } = render(<DropdownWithMockedParent />);

    const currentOptionSelected = getByText(
      (content, element) =>
        content.startsWith('Option #1') && element?.tagName === 'SUMMARY',
    );

    expect(currentOptionSelected).toBeTruthy();
  });

  it('should open and close dropdown', async () => {
    const { getByText, getByRole } = render(<DropdownWithMockedParent />);

    const currentOptionSelected = getByText(
      (content, element) =>
        content.startsWith('Option #1') && element?.tagName === 'SUMMARY',
    );

    fireEvent.click(currentOptionSelected);

    const openCloseRole = getByRole('openClose');
    expect(openCloseRole.hasAttribute('open')).toBe(true);

    fireEvent.click(currentOptionSelected);
    expect(openCloseRole.hasAttribute('open')).toBe(false);
  });

  it('should update option selected state on clicking on input', async () => {
    const { rerender, getByLabelText, getByText } = render(
      <DropdownWithMockedParent />,
    );

    const secondInputRadioOption = getByLabelText('Option #2');
    fireEvent.click(secondInputRadioOption);

    rerender(<DropdownWithMockedParent />);

    const currentOptionSelected = getByText(
      (content, element) =>
        content.startsWith('Option #2') && element?.tagName === 'SUMMARY',
    );

    expect(currentOptionSelected).toBeTruthy();
  });

  it('should display the label when not passed option selected initially', () => {
    const { getByText } = render(
      <DropdownWithMockedParentAndNoCurrentSelectedOption />,
    );

    const label = getByText(
      (content, element) =>
        content.startsWith('Dropdown') && element?.tagName === 'SUMMARY',
    );

    expect(label).toBeTruthy();
  });
});
