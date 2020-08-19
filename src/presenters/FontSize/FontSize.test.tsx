import React from 'react';
import { render, screen } from '@testing-library/react';
import FontSize from './FontSize';

const FONT_SIZE_VALUE = '20px';

describe('FontSize', () => {
  describe('renders', () => {
    beforeEach(() => {
      renderComponent();
    });

    it('render given FontSize', () => {
      const FontSizeredElement = screen.getByTestId('fontSizeSample');
      const styles = window.getComputedStyle(FontSizeredElement);

      expect(styles['font-size']).toBe(FONT_SIZE_VALUE);
    });

    it('render variable value', () => {
      const variableElement = screen.getByText(FONT_SIZE_VALUE);

      expect(variableElement.textContent).toBe(FONT_SIZE_VALUE);
    });
  });

  describe('variable reference', () => {
    beforeEach(() => {
      const props = {
        reference: '$fontSizeReference',
      };
      renderComponent(props);
    });

    it('render correct value when token has a reference', () => {
      const fontSizeElement = screen.getByTestId('fontSizeSample');
      const styles = window.getComputedStyle(fontSizeElement);

      expect(styles['font-size']).toBe(FONT_SIZE_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$fontSizeReference');

      expect(variableElement.textContent).toBe('$fontSizeReference');
    });
  });

  describe('When value reference is not found', () => {
    it('renders unknown as font-size value', () => {
      const props = {
        reference: '$fontSizeReference',
        value: undefined,
      };
      renderComponent(props);

      const fontSizeElement = screen.getByTestId('fontSizeSample');
      const styles = window.getComputedStyle(fontSizeElement);

      // Note: jsdom omit non-valid values
      expect(styles['font-size']).toBe('');
    });

    it('renders unknown text', () => {
      const props = {
        reference: '$fontSizeReference',
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
    value: FONT_SIZE_VALUE,
    declaration: 'fontSize',
    ...tokenProps,
  };
  render(<FontSize token={token} />);
}
