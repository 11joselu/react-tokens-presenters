import React from 'react';
import { render, screen } from '@testing-library/react';
import Width from './Width';

describe('Width', () => {
  beforeEach(() => {
    render(<Width value="40px" declaration="WidthVar" />);
  });

  it('render given Width', () => {
    const WidthredElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(WidthredElement);

    expect(styles['width']).toBe('40px');
  });

  it('render variable name', () => {
    const variableElement = screen.getByText('WidthVar');

    expect(variableElement.textContent).toBe('WidthVar');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('40px');

    expect(variableElement.textContent).toBe('40px');
  });
});
