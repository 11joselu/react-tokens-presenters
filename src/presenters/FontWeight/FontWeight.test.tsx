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
      const fontElement = screen.getByTestId('fontWeightSample');
      const styles = window.getComputedStyle(fontElement);

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
      const fontElement = screen.getByTestId('fontWeightSample');
      const styles = window.getComputedStyle(fontElement);

      expect(styles['font-weight']).toBe(FONT_WEIGHT_VALUE);
    });

    it('render variable value reference', () => {
      const variableElement = screen.getByText('$fontWeightReference');

      expect(variableElement.textContent).toBe('$fontWeightReference');
    });
  });

  describe('When value reference is not found', () => {
    beforeEach(() => {
      const props = {
        reference: '$fontSizeReference',
        value: undefined,
      };
      renderComponent(props);
    });

    it('renders unknown box element and hide font-weight sample', () => {
      const boxElement = screen.getByTestId('box');

      expect(boxElement).toBeVisible();
      expect(screen.queryByTestId('fontWeightSample')).toBeNull();
    });

    it('renders unknown text', () => {
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
