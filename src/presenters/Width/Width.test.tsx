import React from 'react';
import { render, screen } from '@testing-library/react';
import Width from './Width';

describe('Width', () => {
  beforeEach(() => {
    const token = {
      value: '40px',
      declaration: 'WidthVar',
    };
    render(<Width token={token} />);
  });

  it('render given Width', () => {
    const WidthredElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(WidthredElement);

    expect(styles['width']).toBe('40px');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('40px');

    expect(variableElement.textContent).toBe('40px');
  });
});
