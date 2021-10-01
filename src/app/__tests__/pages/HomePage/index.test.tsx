import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { HomePage } from 'app/pages/HomePage';

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

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<HomePage />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
