import * as React from 'react';
import styled from 'styled-components/macro';
import { ShoppingStore } from 'types';
import { Modal } from '../commons/Modal';
import { ModalContext } from '../commons/Modal/context';

interface Props {}

const MapsIframe = ({ ...props }: Props) => {
  const modalContext = React.useContext(ModalContext);

  React.useEffect(() => {
    if (modalContext) {
      console.log('modalContext.data', modalContext);
    }
  }, [modalContext, modalContext.state]);

  return (
    <ModalContext.Consumer>
      {({ state }: { state: { data: ShoppingStore } }) => (
        <Div>MapsIframeModal {state.data.placeName}</Div>
      )}
    </ModalContext.Consumer>
  );
};

const Div = styled.div``;

const MapsIframeModal = Modal(MapsIframe);

export { MapsIframeModal };
