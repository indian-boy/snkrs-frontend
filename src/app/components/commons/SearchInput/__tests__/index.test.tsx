import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { configureAppStore } from 'store/configureStore';
import { CommonUsedAttributes } from 'types';
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

const renderComponentWithProviders = (
  props: Parameters<typeof SearchInput>[number] & CommonUsedAttributes,
  store: Store,
) =>
  render(
    <Provider store={store}>
      <SearchInput {...props} />
    </Provider>,
  );

describe('<SearchInput />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = renderComponentWithProviders(
      {
        'data-testid': 'searchID',
        type: 'search',
        placeholder: 'placeholder',
      },
      store,
    );

    const searchElement = getByTestId('searchID');

    expect(searchElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should clear search', () => {
    const { getByTestId, getByRole } = renderComponentWithProviders(
      {
        'data-testid': 'searchID',
        type: 'search',
        placeholder: 'placeholder',
        showCloseIcon: true,
        showSearchIcon: true,
      },
      store,
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
    const { queryByTestId } = renderComponentWithProviders(
      {
        'data-testid': 'searchID',
        type: 'search',
        hidden: true,
      },
      store,
    );

    const searchElement = queryByTestId('searchID') as HTMLInputElement;
    expect(searchElement).toBeFalsy();
  });
});
