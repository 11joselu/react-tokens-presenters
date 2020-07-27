import React from 'react';
import { render, screen } from '@testing-library/react';
import Spacing from './Spacing';

describe('Spacing', () => {
  beforeEach(() => {
    render(<Spacing value="10px 10px 5px 3px" name="Spacing" />);
  });

  it('render given Spacing', () => {
    const SpacingredElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(SpacingredElement);

    expect(styles['padding']).toBe('10px 10px 5px 3px');
  });

  it('render variable name', () => {
    const variableElement = screen.getByText('Spacing');

    expect(variableElement.textContent).toBe('Spacing');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('10px 10px 5px 3px');

    expect(variableElement.textContent).toBe('10px 10px 5px 3px');
  });
});