import React from 'react';
import { render, screen } from '@testing-library/react';
import Opacity from './Opacity';

describe('Opacity', () => {
  beforeEach(() => {
    render(<Opacity value="0.6" declaration="opacity" />);
  });

  it('render given Opacity', () => {
    const OpacityredElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(OpacityredElement);

    expect(styles['opacity']).toBe('0.6');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('0.6');

    expect(variableElement.textContent).toBe('0.6');
  });
});
