import React from 'react';
import { render, screen } from '@testing-library/react';
import Opacity from './Opacity';

const OPACITY_VALUE = '0.6';

describe('Opacity', () => {
  describe('renders', () => {
    beforeEach(() => {
      const token = {
        value: OPACITY_VALUE,
        declaration: 'opacity',
      };
      render(<Opacity token={token} />);
    });

    it('render given Opacity', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['opacity']).toBe(OPACITY_VALUE);
    });

    it('render variable value', () => {
      const variableElement = screen.getByText(OPACITY_VALUE);

      expect(variableElement.textContent).toBe(OPACITY_VALUE);
    });
  });
});
