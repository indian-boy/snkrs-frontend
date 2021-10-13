import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { CommonUsedAttributes } from 'types';
import { NewsSlider } from '..';

const renderComponentWithProviders = (
  props: Parameters<typeof NewsSlider>[number] & CommonUsedAttributes,
  store: Store,
) =>
  render(
    <Provider store={store}>
      <NewsSlider {...props} />
    </Provider>,
  );

describe('<NewsSlider  />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should match snapshot', () => {
    const { getByTestId, container } = renderComponentWithProviders(
      {
        'data-testid': 'newsSliderID',
      },
      store,
    );
    const newsSliderElement = getByTestId('newsSliderID');

    expect(newsSliderElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
