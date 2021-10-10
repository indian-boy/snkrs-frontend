import { environment } from 'environment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingStore } from 'types';
import { Modal, SearchInput } from '../commons';
import { ModalContext } from '../commons/Modal/context';
import { messages } from './messages';
import { Iframe, Wrapper } from './styles';

interface Props {}

const MapsIframe = ({ ...props }: Props) => {
  const { t } = useTranslation();

  return (
    <ModalContext.Consumer>
      {({ state }: { state: { data: ShoppingStore } }) => (
        <Wrapper role="mapsLocationModal" {...props}>
          <SearchInput
            style={{ width: '100%' }}
            showCloseIcon={true}
            noBorders={true}
            type="search"
            placeholder={t(messages.i18nSearchPlaceholder())}
          />
          <Iframe
            src={`https://www.google.com/maps/embed/v1/place?q=${state.data.address.location}&key=${environment.googleAPIKey}`}
            width="100%"
            height="100%"
            title="googlemapsiframe"
          ></Iframe>
        </Wrapper>
      )}
    </ModalContext.Consumer>
  );
};

const MapsIframeModal = Modal(MapsIframe);

export { MapsIframeModal };
