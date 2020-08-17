import React from 'react';
import { render, screen } from '@testing-library/react';
import Border from './Border';

describe('Border', () => {
  describe('renders', () => {
    beforeEach(() => {
      renderComponent();
    });

    it('render given border', () => {
      const borderedElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(borderedElement);

      expect(styles['border']).toBe('1px solid tomato');
    });

    it('render variable value', () => {
      const variableElement = screen.getByText('1px solid tomato');

      expect(variableElement.textContent).toBe('1px solid tomato');
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
      const borderedElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(borderedElement);

      expect(styles['border']).toBe('1px solid tomato');
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$borderReference');

      expect(variableElement.textContent).toBe('$borderReference');
    });
  });
});

function renderComponent(tokenProps = {}): void {
  const token = {
    value: '1px solid tomato',
    declaration: 'border',
    ...tokenProps,
  };
  render(<Border token={token} />);
}
