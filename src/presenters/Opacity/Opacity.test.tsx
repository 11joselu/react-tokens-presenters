import React from 'react';
import { render, screen } from '@testing-library/react';
import Opacity from './Opacity';

describe('Opacity', () => {
  beforeEach(() => {
    render(<Opacity value="0.6" name="opacity" />);
  });

  it('render given Opacity', () => {
    const OpacityredElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(OpacityredElement);

    expect(styles['opacity']).toBe('1px solid tomato');
  });

  it('render variable name', () => {
    const variableElement = screen.getByText('opacity');

    expect(variableElement.textContent).toBe('opacity');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('0.6');

    expect(variableElement.textContent).toBe('0.6');
  });
});
