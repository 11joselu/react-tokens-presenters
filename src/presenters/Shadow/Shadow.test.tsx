import React from 'react';
import { render, screen } from '@testing-library/react';
import Shadow from './Shadow';

const SHADOW_VALUE = '15px 15px 27px #e1e1e3';

describe('Shadow', () => {
  describe('renders', () => {
    beforeEach(() => {
      renderComponent();
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

  describe('variable reference', () => {
    beforeEach(() => {
      const props = {
        reference: '$shadowReference',
      };
      renderComponent(props);
    });

    it('render correct value when token has a reference', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['box-shadow']).toBe(SHADOW_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$shadowReference');

      expect(variableElement.textContent).toBe('$shadowReference');
    });
  });

  describe('When value reference is not found', () => {
    beforeEach(() => {
      const props = {
        reference: '$shadowReference',
        value: undefined,
      };
      renderComponent(props);
    });

    it('renders unknown as box-shadow value', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['box-shadow']).toBe('unknown');
    });

    it('renders unknown text', () => {
      const unknownElement = screen.getByText('unknown');

      expect(unknownElement).toBeVisible();
    });
  });
});

function renderComponent(tokenProps = {}): void {
  const token = {
    value: SHADOW_VALUE,
    declaration: 'boxShadow',
    ...tokenProps,
  };
  render(<Shadow token={token} />);
}
