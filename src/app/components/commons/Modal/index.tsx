import * as React from 'react';
import { ModalContext } from './context';
import { Div } from './styles';

interface Props {}

export const Modal = Component => (props: Props) => {
  return (
    <ModalContext.Consumer>
      {({ state, setShowModalWrapper }) => {
        if (!state || !state.showModalState) {
          return null;
        }

        return (
          <Div>
            modal
            <Component {...props} />
          </Div>
        );
      }}
    </ModalContext.Consumer>
  );
};
