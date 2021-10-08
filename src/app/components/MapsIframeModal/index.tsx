import { environment } from 'environment';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingStore } from 'types';
import { debounce } from 'utils/helpers';
import { Modal, SearchInput } from '../commons';
import { ModalContext } from '../commons/Modal/context';
import { messages } from './messages';
import { Iframe, Wrapper } from './styles';

interface Props {}

const MapsIframe = ({ ...props }: Props) => {
  const { t } = useTranslation();

  const [searchTermState, setSearchTerm] = React.useState<string>('');

  const updateSearchDebounced = debounce(async (searchTerm: string) => {
    if (searchTerm.length >= 3) {
      setSearchTerm(searchTerm);
    } else if (!searchTerm) {
      setSearchTerm('');
    }
  }, 1500);

  return (
    <ModalContext.Consumer>
      {({ state }: { state: { data: ShoppingStore } }) => (
        <Wrapper>
          <SearchInput
            style={{ width: '100%' }}
            onChange={e => updateSearchDebounced(e.target.value)}
            showCloseIcon={true}
            noBorders={true}
            type="search"
            placeholder={t(messages.i18nSearchPlaceholder())}
          />
          <Iframe
            src={`https://www.google.com/maps/embed/v1/place?q=${
              searchTermState.length >= 3
                ? searchTermState
                : state.data.address.location
            }&key=${environment.googleAPIKey}`}
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
