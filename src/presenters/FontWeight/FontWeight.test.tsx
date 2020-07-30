import React from 'react';
import { render, screen } from '@testing-library/react';
import FontWeight from './FontWeight';

describe('FontWeight', () => {
  beforeEach(() => {
    const token = {
      declaration: 'FontWeight',
      value: 'bold',
    };
    render(<FontWeight token={token} />);
  });

  it('render given FontWeight', () => {
    const FontWeightredElement = screen.getByTestId('fontWeightSample');
    const styles = window.getComputedStyle(FontWeightredElement);

    expect(styles['font-weight']).toBe('bold');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('bold');

    expect(variableElement.textContent).toBe('bold');
  });
});
