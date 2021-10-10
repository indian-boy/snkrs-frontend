import { HomePage } from 'app/pages/HomePage';
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

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<HomePage data-testid="homePageID" />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
