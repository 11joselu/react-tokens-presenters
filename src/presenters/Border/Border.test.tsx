import React from 'react';
import { render, screen } from '@testing-library/react';
import Border from './Border';

describe('Border', () => {
  beforeEach(() => {
    const token = {
      value: '1px solid tomato',
      declaration: 'border',
    };
    render(<Border token={token} />);
  });

  it('render given border', () => {
    const borderedElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(borderedElement);

    expect(styles['border']).toBe('1px solid tomato');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('1px solid tomato');

    expect(variableElement.textContent).toBe('1px solid tomato');
  });
});
