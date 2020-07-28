import React from 'react';
import { render, screen } from '@testing-library/react';
import FontWeight from './FontWeight';

describe('FontWeight', () => {
  beforeEach(() => {
    render(<FontWeight declaration="FontWeight" value="bold" />);
  });

  it('render given FontWeight', () => {
    const FontWeightredElement = screen.getByTestId('fontWeightSample');
    const styles = window.getComputedStyle(FontWeightredElement);

    expect(styles['font-weight']).toBe('bold');
  });

  it('render variable name', () => {
    const variableElement = screen.getByText('FontWeight');

    expect(variableElement.textContent).toBe('FontWeight');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('bold');

    expect(variableElement.textContent).toBe('bold');
  });
});
