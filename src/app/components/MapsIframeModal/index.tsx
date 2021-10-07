import { environment } from 'environment';
import * as React from 'react';
import { ShoppingStore } from 'types';
import { Modal } from '../commons/Modal';
import { ModalContext } from '../commons/Modal/context';
import { Div, Iframe } from './styles';

interface Props {}

const MapsIframe = ({ ...props }: Props) => {
  const modalContext = React.useContext(ModalContext);

  // React.useEffect(() => {
  //   if (modalContext) {
  //     console.log('modalContext.data', modalContext);
  //   }
  // }, [modalContext, modalContext.state]);

  return (
    <ModalContext.Consumer>
      {({ state }: { state: { data: ShoppingStore } }) => (
        <Div>
          MapsIframeModal {state.data.placeName}
          <Iframe
            src={`https://www.google.com/maps/embed/v1/place?q=${state.data.address.location}&key=${environment.googleAPIKey}`}
            width="100%"
            height="100%"
            title="googlemapsiframe"
          ></Iframe>
        </Div>
      )}
    </ModalContext.Consumer>
  );
};

const MapsIframeModal = Modal(MapsIframe);

export { MapsIframeModal };
