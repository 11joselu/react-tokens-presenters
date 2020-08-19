import React from 'react';
import { render, screen } from '@testing-library/react';
import Shadow from './Shadow';

describe('Shadow', () => {
  beforeEach(() => {
    const token = {
      value: '15px 15px 27px #e1e1e3',
      declaration: 'boxShadow',
    };
    render(<Shadow token={token} />);
  });

  it('render given Shadow', () => {
    const boxElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(boxElement);

    expect(styles['box-shadow']).toBe('15px 15px 27px #e1e1e3');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('15px 15px 27px #e1e1e3');

    expect(variableElement.textContent).toBe('15px 15px 27px #e1e1e3');
  });
});
