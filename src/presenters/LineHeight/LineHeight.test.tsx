import React from 'react';
import { render, screen } from '@testing-library/react';
import LineHeight from './LineHeight';

describe('LineHeight', () => {
  beforeEach(() => {
    render(<LineHeight declaration="LineHeight" value="1.4rem" />);
  });

  it('render given LineHeight', () => {
    const LineHeightredElement = screen.getByTestId('LineHeightSample');
    const styles = window.getComputedStyle(LineHeightredElement);

    expect(styles['line-height']).toBe('1.4rem');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('1.4rem');

    expect(variableElement.textContent).toBe('1.4rem');
  });
});
