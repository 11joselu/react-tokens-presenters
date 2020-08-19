import React from 'react';
import { render, screen } from '@testing-library/react';
import Opacity from './Opacity';

const OPACITY_VALUE = '0.6';

describe('Opacity', () => {
  describe('renders', () => {
    beforeEach(() => {
      renderComponent();
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

  describe('variable reference', () => {
    beforeEach(() => {
      const props = {
        reference: '$opacityReference',
      };
      renderComponent(props);
    });

    it('render correct value when token has a reference', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['opacity']).toBe(OPACITY_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$opacityReference');

      expect(variableElement.textContent).toBe('$opacityReference');
    });
  });

  describe('When value reference is not found', () => {
    beforeEach(() => {
      const props = {
        reference: '$opacityReference',
        value: undefined,
      };
      renderComponent(props);
    });

    it('renders unknown as opacity value', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      // Note: jsdom omit non-valid values
      expect(styles['opacity']).toBe('');
    });

    it('renders unknown text', () => {
      const unknownElement = screen.getByText('unknown');

      expect(unknownElement).toBeVisible();
    });
  });
});

function renderComponent(tokenProps = {}): void {
  const token = {
    value: OPACITY_VALUE,
    declaration: 'opacity',
    ...tokenProps,
  };
  render(<Opacity token={token} />);
}
