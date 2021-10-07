import { render } from '@testing-library/react';
import * as React from 'react';
import { Modal } from '..';

const MockComponent = () => {
  return <div>Modal</div>;
};

const MockedComponenteWithModal = Modal(MockComponent);

describe('<MockedComponenteWithModal  />', () => {
  it('should match snapshot', () => {
    const mockedComponenteWithModal = render(<MockedComponenteWithModal />);
    expect(mockedComponenteWithModal.container.firstChild).toMatchSnapshot();
  });
});
