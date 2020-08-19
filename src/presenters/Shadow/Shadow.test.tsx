import React from 'react';
import { render, screen } from '@testing-library/react';
import Shadow from './Shadow';

const SHADOW_VALUE = '15px 15px 27px #e1e1e3';

describe('Shadow', () => {
  describe('renders', () => {
    beforeEach(() => {
      const token = {
        value: SHADOW_VALUE,
        declaration: 'boxShadow',
      };
      render(<Shadow token={token} />);
    });

    it('render given Shadow', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['box-shadow']).toBe(SHADOW_VALUE);
    });

    it('render variable value', () => {
      const variableElement = screen.getByText(SHADOW_VALUE);

      expect(variableElement.textContent).toBe(SHADOW_VALUE);
    });
  });
});
