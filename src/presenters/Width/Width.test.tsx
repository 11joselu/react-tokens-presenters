import React from 'react';
import { render, screen } from '@testing-library/react';
import Width from './Width';

const WIDTH_VALUE = '40px';

describe('Width', () => {
  describe('renders', () => {
    beforeEach(() => {
      renderComponent();
    });

    it('render given Width', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['width']).toBe(WIDTH_VALUE);
    });

    it('render variable value', () => {
      const variableElement = screen.getByText(WIDTH_VALUE);

      expect(variableElement.textContent).toBe(WIDTH_VALUE);
    });
  });
  describe('variable reference', () => {
    beforeEach(() => {
      const props = {
        reference: '$widthReference',
      };
      renderComponent(props);
    });

    it('render correct value when token has a reference', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['width']).toBe(WIDTH_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$widthReference');

      expect(variableElement.textContent).toBe('$widthReference');
    });
  });

  describe('When value reference is not found', () => {
    beforeEach(() => {
      const props = {
        reference: '$widthReference',
        value: undefined,
      };
      renderComponent(props);
    });

    it('renders default width value', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['width']).toBe('5rem');
    });

    it('renders unknown text', () => {
      const unknownElement = screen.getByText('unknown');

      expect(unknownElement).toBeVisible();
    });
  });
});

function renderComponent(tokenProps = {}): void {
  const token = {
    value: WIDTH_VALUE,
    declaration: 'widthVar',
    ...tokenProps,
  };
  render(<Width token={token} />);
}
