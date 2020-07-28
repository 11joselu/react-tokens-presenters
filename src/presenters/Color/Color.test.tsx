import React from 'react';
import { render } from '@testing-library/react';
import Color from './Color';

describe('Color', () => {
  it('render given color', () => {
    const { getByText } = render(<Color value="blue" declaration="myVar" />);

    const element = getByText('blue');

    expect(element.textContent).toBe('blue');
  });

  it('render circle color sample', () => {
    const { getByTestId } = render(<Color value="red" declaration="myVar" />);

    const circleElement = getByTestId('circle');
    const styles = window.getComputedStyle(circleElement);

    expect(styles['background-color']).toBe('red');
  });
});
