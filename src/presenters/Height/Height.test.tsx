import React from 'react';
import { render, screen } from '@testing-library/react';
import Height from './Height';

describe('Height', () => {
  beforeEach(() => {
    render(<Height value="100px" declaration="heightVar" />);
  });

  it('render given Height', () => {
    const HeightredElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(HeightredElement);

    expect(styles['height']).toBe('100px');
  });

  it('render variable name', () => {
    const variableElement = screen.getByText('heightVar');

    expect(variableElement.textContent).toBe('heightVar');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('100px');

    expect(variableElement.textContent).toBe('100px');
  });
});
