import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import ThemeProviderWrapper from 'styles/themes/themeProvider';
import { Modal } from '..';
import { ModalContext } from '../context';

const MockComponent = props => {
  return <div {...props}>Modal Content</div>;
};
const MockedComponenteWithModal = Modal(MockComponent);

const ParentComponentRenderingWithProviders = (store: Store) => {
  const [state, setModalData] = useState<{
    showModal: boolean;
    data: any;
  }>({
    showModal: true,
    data: {},
  });

  const setModalDataIntoContext = (showModal: boolean, data: any) => {
    setModalData({ showModal, data });
  };

  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <ModalContext.Provider value={{ state, setModalDataIntoContext }}>
          <MockedComponenteWithModal data-testid="modalID" />
        </ModalContext.Provider>
      </ThemeProviderWrapper>
    </Provider>
  );
};

describe('<MockedComponenteWithModal  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const ParentComponent = () => ParentComponentRenderingWithProviders(store);
    const { getByTestId, container } = render(<ParentComponent />);

    const modalElement = getByTestId('modalID');

    expect(modalElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
