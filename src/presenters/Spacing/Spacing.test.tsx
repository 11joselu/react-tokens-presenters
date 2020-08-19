import React from 'react';
import { render, screen } from '@testing-library/react';
import Spacing from './Spacing';

const SPACING_VALUE = '10px 10px 5px 3px';

describe('Spacing', () => {
  describe('renders', () => {
    beforeEach(() => {
      const token = {
        value: SPACING_VALUE,
        declaration: 'Spacing',
      };
      render(<Spacing token={token} />);
    });

    it('render given Spacing', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['padding']).toBe(SPACING_VALUE);
    });

    it('render variable value', () => {
      const variableElement = screen.getByText(SPACING_VALUE);

      expect(variableElement.textContent).toBe(SPACING_VALUE);
    });
  });
});
