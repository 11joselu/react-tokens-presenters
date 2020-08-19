import React from 'react';
import { render, screen } from '@testing-library/react';
import Width from './Width';

const WIDTH_VALUE = '40px';

describe('Width', () => {
  describe('renders', () => {
    beforeEach(() => {
      const token = {
        value: WIDTH_VALUE,
        declaration: 'WidthVar',
      };
      render(<Width token={token} />);
    });

    it('render given Width', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['width']).toBe(WIDTH_VALUE);
    });

    it('render variable value', () => {
      const variableElement = screen.getByText(WIDTH_VALUE);

      expect(variableElement.textContent).toBe(WIDTH_VALUE);
    });
  });
});
