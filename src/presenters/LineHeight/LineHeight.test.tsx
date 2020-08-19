import React from 'react';
import { render, screen } from '@testing-library/react';
import LineHeight from './LineHeight';

const LINE_HEIGHT_VALUE = '1.4rem';

describe('LineHeight', () => {
  describe('renders', () => {
    beforeEach(() => {
      renderComponent();
    });

    it('render given LineHeight', () => {
      const textElement = screen.getByTestId('LineHeightSample');
      const styles = window.getComputedStyle(textElement);

      expect(styles['line-height']).toBe(LINE_HEIGHT_VALUE);
    });

    it('render variable value', () => {
      const variableElement = screen.getByText(LINE_HEIGHT_VALUE);

      expect(variableElement.textContent).toBe(LINE_HEIGHT_VALUE);
    });
  });

  describe('When value reference is not found', () => {
    beforeEach(() => {
      const props = {
        reference: '$lineHeightReference',
        value: undefined,
      };
      renderComponent(props);
    });

    it('renders unknown box element and hide line-height sample', () => {
      const boxElement = screen.getByTestId('box');

      expect(boxElement).toBeVisible();
      expect(screen.queryByTestId('LineHeightSample')).toBeNull();
    });

    it('renders unknown text', () => {
      const unknownElement = screen.getByText('unknown');

      expect(unknownElement).toBeVisible();
    });
  });
});

function renderComponent(tokenProps = {}): void {
  const token = {
    value: LINE_HEIGHT_VALUE,
    declaration: 'LineHeight',
    ...tokenProps,
  };
  render(<LineHeight token={token} />);
}
