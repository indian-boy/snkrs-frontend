import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { NotFoundPage } from 'app/pages/NotFoundPage';

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
