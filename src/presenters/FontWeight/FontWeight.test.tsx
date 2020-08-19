import React from 'react';
import { render, screen } from '@testing-library/react';
import FontWeight from './FontWeight';

const FONT_WEIGHT_VALUE = 'bold';

describe('FontWeight', () => {
  describe('renders', () => {
    beforeEach(() => {
      renderComponent();
    });

    it('render given FontSize', () => {
      const FontSizeredElement = screen.getByTestId('fontWeightSample');
      const styles = window.getComputedStyle(FontSizeredElement);

      expect(styles['font-weight']).toBe(FONT_WEIGHT_VALUE);
    });

    it('render variable value', () => {
      const variableElement = screen.getByText(FONT_WEIGHT_VALUE);

      expect(variableElement.textContent).toBe(FONT_WEIGHT_VALUE);
    });
  });

  describe('variable reference', () => {
    beforeEach(() => {
      const props = {
        reference: '$fontWeightReference',
      };
      renderComponent(props);
    });

    it('render correct value when token has a reference', () => {
      const fontSample = screen.getByTestId('fontWeightSample');
      const styles = window.getComputedStyle(fontSample);

      expect(styles['font-weight']).toBe(FONT_WEIGHT_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$fontWeightReference');

      expect(variableElement.textContent).toBe('$fontWeightReference');
    });
  });

  describe('When value reference is not found', () => {
    it('renders unknown as font-size value', () => {
      const props = {
        reference: '$fontSizeReference',
        value: undefined,
      };
      renderComponent(props);

      const fontSample = screen.getByTestId('fontWeightSample');
      const styles = window.getComputedStyle(fontSample);

      // Note: jsdom omit non-valid values
      expect(styles['font-weight']).toBe('unknown');
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
    value: FONT_WEIGHT_VALUE,
    declaration: 'fontSize',
    ...tokenProps,
  };
  render(<FontWeight token={token} />);
}
