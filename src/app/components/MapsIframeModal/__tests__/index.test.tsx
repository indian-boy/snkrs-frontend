import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ModalContext } from 'app/components/Shared/Modal/context';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import ThemeProviderWrapper from 'styles/themes/themeProvider';
import { ShoppingStore } from 'types';
import { MapsIframeModal } from '..';

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

const ParentComponentRenderingWithProviders = (store: Store) => {
  const [state, setModalData] = useState<{
    showModal: boolean;
    data: ShoppingStore;
  }>({
    showModal: true,
    data: {
      id: 1,
      placeName: 'Nike Store Oscar Freire',
      address: {
        latitude: -23.562692,
        longitude: -46.6695949,
        location:
          'R. Oscar Freire, 969 - Jardim Paulista, São Paulo - SP, 01426-001',
      },
      availability: 4,
      serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
      distance: 1000,
    },
  });

  const setModalDataIntoContext = (showModal: boolean, data: any) => {
    setModalData({ showModal, data });
  };

  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <ModalContext.Provider value={{ state, setModalDataIntoContext }}>
          <MapsIframeModal data-testid="mapsIframeModalID" />
        </ModalContext.Provider>
      </ThemeProviderWrapper>
    </Provider>
  );
};

describe('<MapsIframeModal  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const ParentComponent = () => ParentComponentRenderingWithProviders(store);
    const { getByTestId, container } = render(<ParentComponent />);

    const mapsIframeModalElement = getByTestId('mapsIframeModalID');

    expect(mapsIframeModalElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
