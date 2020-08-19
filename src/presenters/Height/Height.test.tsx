import React from 'react';
import { render, screen } from '@testing-library/react';
import Height from './Height';

const HEIGHT_VALUE = '100px';

describe('Height', () => {
  describe('renders', () => {
    beforeEach(() => {
      renderComponent();
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

  describe('variable reference', () => {
    beforeEach(() => {
      const props = {
        reference: '$heightReference',
      };
      renderComponent(props);
    });

    it('render correct value when token has a reference', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      expect(styles['height']).toBe(HEIGHT_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$heightReference');

      expect(variableElement.textContent).toBe('$heightReference');
    });
  });

  describe('When value reference is not found', () => {
    beforeEach(() => {
      const props = {
        reference: '$heightReference',
        value: undefined,
      };
      renderComponent(props);
    });

    it('renders unknown as height value', () => {
      const boxElement = screen.getByTestId('box');
      const styles = window.getComputedStyle(boxElement);

      // Note: jsdom omit non-valid values
      expect(styles['height']).toBe('');
    });

    it('renders unknown text', () => {
      const unknownElement = screen.getByText('unknown');

      expect(unknownElement).toBeVisible();
    });
  });
});

function renderComponent(tokenProps = {}): void {
  const token = {
    value: HEIGHT_VALUE,
    declaration: 'heightVar',
    ...tokenProps,
  };
  render(<Height token={token} />);
}
