import React from 'react';
import { render, screen } from '@testing-library/react';
import Color from './Color';

const COLOR_VALUE = 'red';

describe('Color', () => {
  describe('renders', () => {
    beforeEach(() => {
      renderComponent();
    });

    it('render given color', () => {
      const element = screen.getByText(COLOR_VALUE);

      expect(element.textContent).toBe(COLOR_VALUE);
    });

    it('render circle color sample', () => {
      const colorElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(colorElement);

      expect(styles['background-color']).toBe(COLOR_VALUE);
    });
  });

  describe('variable reference', () => {
    beforeEach(() => {
      const props = {
        reference: '$colorReference',
      };
      renderComponent(props);
    });

    it('render correct value when token has a reference', () => {
      const colorElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(colorElement);

      expect(styles['background-color']).toBe(COLOR_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$colorReference');

      expect(variableElement.textContent).toBe('$colorReference');
    });
  });

  describe('When value reference is not found', () => {
    it('renders unknown as background-color value', () => {
      const props = {
        reference: '$colorReference',
        value: undefined,
      };
      renderComponent(props);

      const borderedElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(borderedElement);

      // Note: jsdom omit non-valid values
      expect(styles['background-color']).toBe('');
    });
  });
});

function renderComponent(tokenProps = {}): void {
  const token = {
    value: COLOR_VALUE,
    declaration: 'myVar',
    ...tokenProps,
  };
  render(<Color token={token} />);
}
