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
      const borderedElement = screen.getByTestId('fontWeightSample');
      const styles = window.getComputedStyle(borderedElement);

      expect(styles['font-weight']).toBe(FONT_WEIGHT_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$fontWeightReference');

      expect(variableElement.textContent).toBe('$fontWeightReference');
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
