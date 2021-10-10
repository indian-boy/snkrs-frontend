import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { SearchInput } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<SearchInput />', () => {
  it('should match snapshot', () => {
    const { getByTestId, container } = render(
      <SearchInput type="search" placeholder="placeholder" />,
    );

    const searchElement = getByTestId('searchID');

    expect(searchElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should clear search', () => {
    const { getByRole, getByTestId } = render(
      <SearchInput type="search" showCloseIcon={true} showSearchIcon={true} />,
    );

    const searchElement = getByTestId('searchID') as HTMLInputElement;
    const closeIcon = getByRole('clear');

    fireEvent.click(closeIcon);

    fireEvent.change(searchElement, { target: { value: 'test value' } });
    expect(searchElement.value).toBe('test value');

    fireEvent.click(closeIcon);

    expect(searchElement.value).toBe('');
  });

  it('should hide input', () => {
    const { queryByTestId } = render(
      <SearchInput type="search" hidden={true} />,
    );

    const searchElement = queryByTestId('searchID') as HTMLInputElement;
    expect(searchElement).toBeFalsy();
  });
});
