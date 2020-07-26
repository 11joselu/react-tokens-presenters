import React from 'react';
import { render } from '@testing-library/react';
import Color from './Color';

describe('Color', () => {
  it('render given color', () => {
    const { getByText } = render(<Color color="blue" variableName="myVar" />);

    const element = getByText('blue');

    expect(element.textContent).toBe('blue');
  });

  it('render circle color sample', () => {
    const { getByTestId } = render(<Color color="red" variableName="myVar" />);

    const circleElement = getByTestId('circle');
    const styles = window.getComputedStyle(circleElement);

    expect(styles['background-color']).toBe('red');
  });

  it('render variable name', () => {
    const { getByText } = render(
      <Color color="red" variableName="col-primary" />
    );

    const variableElement = getByText('col-primary');

    expect(variableElement.textContent).toBe('col-primary');
  });
});
