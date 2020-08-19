import React from 'react';
import { render, screen } from '@testing-library/react';
import LineHeight from './LineHeight';

describe('LineHeight', () => {
  beforeEach(() => {
    const token = {
      value: '1.4rem',
      declaration: 'LineHeight',
    };
    render(<LineHeight token={token} />);
  });

  it('render given LineHeight', () => {
    const textElement = screen.getByTestId('LineHeightSample');
    const styles = window.getComputedStyle(textElement);

    expect(styles['line-height']).toBe('1.4rem');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('1.4rem');

    expect(variableElement.textContent).toBe('1.4rem');
  });
});
