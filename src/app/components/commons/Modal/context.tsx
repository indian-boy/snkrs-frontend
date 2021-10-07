import * as React from 'react';

const ModalContext = React.createContext({
  state: {
    showModal: false,
    data: {} as any,
  },
  setModalDataIntoContext: (_showModal: boolean, _data?: any) => {},
});

ModalContext.displayName = 'ModalContext';

export { ModalContext };
