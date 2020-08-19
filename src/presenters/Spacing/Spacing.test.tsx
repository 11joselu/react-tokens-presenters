import React from 'react';
import { render, screen } from '@testing-library/react';
import Spacing from './Spacing';
import { DEFAULT_SIZE } from '../../ui/Box/Box';

const SPACING_VALUE = '10px 10px 5px 3px';

describe('Spacing', () => {
  describe('renders', () => {
    beforeEach(() => {
      renderComponent();
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

  describe('variable reference', () => {
    beforeEach(() => {
      const props = {
        reference: '$spacingReference',
      };
      renderComponent(props);
    });

    it('render correct value when token has a reference', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['padding']).toBe(SPACING_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$spacingReference');

      expect(variableElement.textContent).toBe('$spacingReference');
    });
  });

  describe('When value reference is not found', () => {
    beforeEach(() => {
      const props = {
        reference: '$spacingReference',
        value: undefined,
      };
      renderComponent(props);
    });

    it('renders unknown as padding value', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['padding']).toBe('');
    });

    it('renders with a default width and height', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['width']).toBe(DEFAULT_SIZE);
      expect(styles['height']).toBe(DEFAULT_SIZE);
    });

    it('renders unknown text', () => {
      const unknownElement = screen.getByText('unknown');

      expect(unknownElement).toBeVisible();
    });
  });
});

function renderComponent(tokenProps = {}): void {
  const token = {
    value: SPACING_VALUE,
    declaration: 'Spacing',
    ...tokenProps,
  };
  render(<Spacing token={token} />);
}
