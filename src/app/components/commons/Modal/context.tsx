import * as React from 'react';

const ModalContext = React.createContext({
  state: {
    showModalState: false,
    data: {} as any,
  },
  setShowModalWrapper: (_showModalState: boolean, _data: any) => {},
});

ModalContext.displayName = 'ModalContext';

export { ModalContext };
