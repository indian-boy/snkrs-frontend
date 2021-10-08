import { render } from '@testing-library/react';
import React from 'react';
import { MapsIframeModal } from '..';

describe('<MapsIframeModal  />', () => {
  it('should match snapshot', () => {
    const mapsIframeModal = render(<MapsIframeModal />);
    expect(mapsIframeModal.container.firstChild).toMatchSnapshot();
  });
});
