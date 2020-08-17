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
      const borderedElement = screen.getByTestId('fontSizeSample');
      const styles = window.getComputedStyle(borderedElement);

      expect(styles['font-size']).toBe(FONT_SIZE_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$fontSizeReference');

      expect(variableElement.textContent).toBe('$fontSizeReference');
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
