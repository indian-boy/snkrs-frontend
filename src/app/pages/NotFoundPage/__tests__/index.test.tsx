import { NotFoundPage } from 'app/pages/NotFoundPage';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

const renderer = createRenderer();

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<NotFoundPage />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<NotFoundPage />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
