import React from 'react';
import { render, screen } from '@testing-library/react';
import Height from './Height';

const HEIGHT_VALUE = '100px';

describe('Height', () => {
  describe('renders', () => {
    beforeEach(() => {
      const token = {
        value: HEIGHT_VALUE,
        declaration: 'heightVar',
      };
      render(<Height token={token} />);
    });

    it('render given Height', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['height']).toBe(HEIGHT_VALUE);
    });

    it('render variable value', () => {
      const variableElement = screen.getByText(HEIGHT_VALUE);

      expect(variableElement.textContent).toBe(HEIGHT_VALUE);
    });
  });
});
