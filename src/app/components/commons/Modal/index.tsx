import { ReactComponent as CloseIcon } from 'assets/svgs/icons/close.svg';
import React from 'react';
import { ModalContext } from './context';
import { CloseButton, Wrapper } from './styles';

interface Props {
  [x: string]: any;
}

export const Modal = Component => (props: Props) => {
  return (
    <ModalContext.Consumer>
      {({ state, setModalDataIntoContext }) => {
        if (!state || !state.showModal) {
          return null;
        }

        return (
          <Wrapper>
            <CloseButton onClick={() => setModalDataIntoContext(false)}>
              <CloseIcon />
            </CloseButton>
            <Component {...props} />
          </Wrapper>
        );
      }}
    </ModalContext.Consumer>
  );
};
