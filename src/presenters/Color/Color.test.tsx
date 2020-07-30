import React from 'react';
import { render, screen } from '@testing-library/react';
import Color from './Color';

describe('Color', () => {
  beforeEach(() => {
    const token = {
      value: 'blue',
      declaration: 'myVar',
    };
    render(<Color token={token} />);
  });

  it('render given color', () => {
    const element = screen.getByText('blue');

    expect(element.textContent).toBe('blue');
  });

  it('render circle color sample', () => {
    const circleElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(circleElement);

    expect(styles['background-color']).toBe('blue');
  });
});
