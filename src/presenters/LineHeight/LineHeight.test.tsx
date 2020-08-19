import React from 'react';
import { render, screen } from '@testing-library/react';
import LineHeight from './LineHeight';

const LINE_HEIGHT_VALUE = '1.4rem';

describe('LineHeight', () => {
  describe('renders', () => {
    beforeEach(() => {
      const token = {
        value: LINE_HEIGHT_VALUE,
        declaration: 'LineHeight',
      };
      render(<LineHeight token={token} />);
    });

    it('render given LineHeight', () => {
      const textElement = screen.getByTestId('LineHeightSample');
      const styles = window.getComputedStyle(textElement);

      expect(styles['line-height']).toBe(LINE_HEIGHT_VALUE);
    });

    it('render variable value', () => {
      const variableElement = screen.getByText(LINE_HEIGHT_VALUE);

      expect(variableElement.textContent).toBe(LINE_HEIGHT_VALUE);
    });
  });
});
