import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Button } from '..';

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

describe('<Button  />', () => {
  it('should match snapshot', () => {
    const { getByTestId, container } = render(
      <Button data-testid="buttonID" label="Label" />,
    );

    const buttonElement = getByTestId('buttonID');

    expect(buttonElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match label inside the button', () => {
    const { getByTestId } = render(
      <Button data-testid="buttonID" label="Label" />,
    );

    const buttonElement = getByTestId('buttonID');
    expect(buttonElement).toHaveTextContent('Label');
  });

  it('should trigger passed onClick function', async () => {
    const onClick = jest.fn();
    const button = render(
      <Button data-testid="buttonID" label="Label" onClick={onClick} />,
    );

    fireEvent.click(button.getByText('Label'));
    expect(onClick).toHaveBeenCalled();
  });
});
