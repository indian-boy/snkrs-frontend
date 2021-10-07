import * as React from 'react';

const ModalContext = React.createContext({
  state: {
    showState: false,
    data: {} as any,
  },
  setModalDataIntoContext: (_showState: boolean, _data: any) => {},
});

ModalContext.displayName = 'ModalContext';

export { ModalContext };
