import React from 'react';
import { render } from '@testing-library/react';
import Color from './Color';

describe('Color', () => {
  it('render given color', () => {
    const { getByText } = render(<Color color="blue" />);

    const element = getByText('blue');

    expect(element.textContent).toBe('blue');
  });

  it('render circle color sample', () => {
    const { getByTestId } = render(<Color color="red" />);

    const circleElement = getByTestId('circle');
    const styles = window.getComputedStyle(circleElement);

    expect(styles['background-color']).toBe('red');
  });
});
