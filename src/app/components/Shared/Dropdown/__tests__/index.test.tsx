import { fireEvent, render } from '@testing-library/react';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { CommonUsedAttributes } from 'types';
import { Dropdown, DropdownProps, Option } from '..';

const defaultOptions = [
  { key: 1, title: 'Option #1' },
  { key: 2, title: 'Option #2' },
];

const WithParentAndProviders = (
  props: Partial<DropdownProps> & CommonUsedAttributes,
) => {
  const { label, options, optionSelectedState } = props;

  const [optionSelectedStateFromParent, setOptionSelected] = useState<
    Option | undefined
  >(optionSelectedState);

  return (
    <Dropdown
      {...props}
      label={label ?? ''}
      options={options ?? []}
      optionSelectedState={optionSelectedStateFromParent}
      setOptionSelected={setOptionSelected}
    />
  );
};

describe('<Dropdown />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const DropdownMocked = () =>
      WithParentAndProviders({
        'data-testid': 'dropdownID',
        label: 'Dropdown',
        options: defaultOptions,
        optionSelectedState: defaultOptions[0],
      });

    const { getByTestId, container } = render(
      <Provider store={store}>
        <DropdownMocked></DropdownMocked>
      </Provider>,
    );

    const dropdownElement = getByTestId('dropdownID');

    expect(dropdownElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display first selected option by default', () => {
    const DropdownMocked = () =>
      WithParentAndProviders({
        'data-testid': 'dropdownID',
        label: 'Dropdown',
        options: defaultOptions,
        optionSelectedState: defaultOptions[0],
      });

    const { getByText } = render(
      <Provider store={store}>
        <DropdownMocked></DropdownMocked>
      </Provider>,
    );

    const currentOptionSelected = getByText(
      (content, element) =>
        content.startsWith('Option #1') && element?.tagName === 'SUMMARY',
    );

    expect(currentOptionSelected).toBeTruthy();
  });

  it('should open and close dropdown', async () => {
    const DropdownMocked = () =>
      WithParentAndProviders({
        'data-testid': 'dropdownID',
        label: 'Dropdown',
        options: defaultOptions,
        optionSelectedState: defaultOptions[0],
      });

    const { getByText, getByRole } = render(
      <Provider store={store}>
        <DropdownMocked></DropdownMocked>
      </Provider>,
    );

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
    const DropdownMocked = () =>
      WithParentAndProviders({
        'data-testid': 'dropdownID',
        label: 'Dropdown',
        options: defaultOptions,
        optionSelectedState: defaultOptions[0],
      });

    const { rerender, getByLabelText, getByText } = render(
      <Provider store={store}>
        <DropdownMocked />
      </Provider>,
    );

    const secondInputRadioOption = getByLabelText('Option #2');
    fireEvent.click(secondInputRadioOption);

    rerender(
      <Provider store={store}>
        <DropdownMocked />
      </Provider>,
    );

    const currentOptionSelected = getByText(
      (content, element) =>
        content.startsWith('Option #2') && element?.tagName === 'SUMMARY',
    );

    expect(currentOptionSelected).toBeTruthy();
  });

  it('should display the label when not passed option selected initially', () => {
    const DropdownMocked = () =>
      WithParentAndProviders({
        'data-testid': 'dropdownID',
        label: 'Dropdown',
        options: defaultOptions,
      });

    const { getByText } = render(
      <Provider store={store}>
        <DropdownMocked />
      </Provider>,
    );

    const label = getByText(
      (content, element) =>
        content.startsWith('Dropdown') && element?.tagName === 'SUMMARY',
    );

    expect(label).toBeTruthy();
  });
});
