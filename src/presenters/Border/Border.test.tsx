import React from 'react';
import { render, screen } from '@testing-library/react';
import Border from './Border';

const BORDER_VALUE = '1px solid tomato';

describe('Border', () => {
  describe('renders', () => {
    beforeEach(() => {
      renderComponent();
    });

    it('render given border', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['border']).toBe(BORDER_VALUE);
    });

    it('render variable value', () => {
      const variableElement = screen.getByText(BORDER_VALUE);

      expect(variableElement.textContent).toBe(BORDER_VALUE);
    });
  });

  describe('variable reference', () => {
    beforeEach(() => {
      const props = {
        reference: '$borderReference',
      };
      renderComponent(props);
    });

    it('render correct value when token has a reference', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['border']).toBe(BORDER_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$borderReference');

      expect(variableElement.textContent).toBe('$borderReference');
    });
  });

  describe('When value reference is not found', () => {
    beforeEach(() => {
      const props = {
        reference: '$borderReference',
        value: undefined,
      };
      renderComponent(props);
    });

    it('renders unknown as border value', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      // Note: jsdom omit non-valid values
      expect(styles['border']).toBe('');
    });

    it('renders unknown text', () => {
      const unknownElement = screen.getByText('unknown');

      expect(unknownElement).toBeVisible();
    });
  });
});

function renderComponent(tokenProps = {}): void {
  const token = {
    value: BORDER_VALUE,
    declaration: 'border',
    ...tokenProps,
  };
  render(<Border token={token} />);
}
