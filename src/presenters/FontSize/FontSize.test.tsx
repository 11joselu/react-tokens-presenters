import React from 'react';
import { render, screen } from '@testing-library/react';
import FontSize from './FontSize';

describe('FontSize', () => {
  beforeEach(() => {
    const token = {
      value: '20px',
      declaration: 'fontSize',
    };
    render(<FontSize token={token} />);
  });

  it('render given FontSize', () => {
    const FontSizeredElement = screen.getByTestId('fontSizeSample');
    const styles = window.getComputedStyle(FontSizeredElement);

    expect(styles['font-size']).toBe('20px');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('20px');

    expect(variableElement.textContent).toBe('20px');
  });
});
