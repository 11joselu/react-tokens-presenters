import React from 'react';
import { render, screen } from '@testing-library/react';
import BorderRadius from './BorderRadius';

const BORDER_RADIUS_VALUE = '30%';

describe('BorderRadius', () => {
  describe('renders', () => {
    beforeEach(() => {
      renderComponent();
    });

    it('render given borderRadius', () => {
      const borderredElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(borderredElement);

      expect(styles['border-radius']).toBe(BORDER_RADIUS_VALUE);
    });

    it('render variable value', () => {
      const variableElement = screen.getByText(BORDER_RADIUS_VALUE);

      expect(variableElement.textContent).toBe(BORDER_RADIUS_VALUE);
    });
  });

  describe('variable reference', () => {
    beforeEach(() => {
      const props = {
        reference: '$radiusReference',
      };
      renderComponent(props);
    });

    it('render correct value when token has a reference', () => {
      const borderedElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(borderedElement);

      expect(styles['border-radius']).toBe(BORDER_RADIUS_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$radiusReference');

      expect(variableElement.textContent).toBe('$radiusReference');
    });
  });

  describe('When value reference is not found', () => {
    it('renders unknown as border value', () => {
      const props = {
        reference: '$borderRadiusReference',
        value: undefined,
      };
      renderComponent(props);

      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['border-radius']).toBe('unknown');
    });

    it('renders unknown text', () => {
      const props = {
        reference: '$borderRadiusReference',
        value: undefined,
      };
      renderComponent(props);

      const unknownElement = screen.getByText('unknown');

      expect(unknownElement).toBeVisible();
    });
  });
});

function renderComponent(tokenProps = {}): void {
  const token = {
    value: BORDER_RADIUS_VALUE,
    declaration: 'border',
    ...tokenProps,
  };
  render(<BorderRadius token={token} />);
}
