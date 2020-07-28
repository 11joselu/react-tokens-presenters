import React from 'react';
import { render, screen } from '@testing-library/react';
import BorderRadius from './BorderRadius';

describe('BorderRadius', () => {
  beforeEach(() => {
    render(<BorderRadius value="30%" declaration="borderRadius" />);
  });
  it('render given borderRadius', () => {
    const borderredElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(borderredElement);

    expect(styles['border-radius']).toBe('30%');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('30%');

    expect(variableElement.textContent).toBe('30%');
  });
});
