import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { CommonUsedAttributes } from 'types';
import { LinksDropdown } from '..';

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

const mockData = {
  title: 'Help',
  links: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'y',
      url: '/y',
    },
  ],
};

const renderComponentWithProviders = (
  props: Parameters<typeof LinksDropdown>[number] & CommonUsedAttributes,
  store: Store,
) => {
  return render(
    <Provider store={store}>
      <LinksDropdown {...props} />
    </Provider>,
  );
};

describe('<LinksDropdown  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = renderComponentWithProviders(
      {
        'data-testid': 'linksDropdownID',
        ...mockData,
      },
      store,
    );

    const linksDropdownElement = getByTestId('linksDropdownID');

    expect(linksDropdownElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
