import React from 'react';
import { render, screen } from '@testing-library/react';
import Border from './Border';

describe('Border', () => {
  beforeEach(() => {
    render(<Border value="1px solid tomato" declaration="border" />);
  });

  it('render given border', () => {
    const borderredElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(borderredElement);

    expect(styles['border']).toBe('1px solid tomato');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('1px solid tomato');

    expect(variableElement.textContent).toBe('1px solid tomato');
  });
});
