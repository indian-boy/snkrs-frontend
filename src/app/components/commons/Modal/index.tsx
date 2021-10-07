import * as React from 'react';
import { ModalContext } from './context';
import { Div } from './styles';

interface Props {}

export const Modal = Component => (props: Props) => {
  return (
    <ModalContext.Consumer>
      {({ state, setModalDataIntoContext }) => {
        if (!state || !state.showState) {
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
