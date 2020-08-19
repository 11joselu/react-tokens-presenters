import React from 'react';
import { render, screen } from '@testing-library/react';
import Opacity from './Opacity';

describe('Opacity', () => {
  beforeEach(() => {
    const token = {
      value: '0.6',
      declaration: 'opacity',
    };
    render(<Opacity token={token} />);
  });

  it('render given Opacity', () => {
    const boxElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(boxElement);

    expect(styles['opacity']).toBe('0.6');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('0.6');

    expect(variableElement.textContent).toBe('0.6');
  });
});
