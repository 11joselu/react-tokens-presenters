import React from 'react';
import { render } from '@testing-library/react';
import TokensSummary from './TokensSummary';

describe('TokensSummary', () => {
  let errorFn;

  beforeEach(() => {
    errorFn = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = errorFn;
  });

  it('should throw error with non existing presenter', () => {
    const tokens = [
      {
        token: 'unknown',
        declaration: 'unknown',
        value: '',
      },
    ];

    expect(() => {
      render(<TokensSummary tokens={tokens} />);
    }).toThrowError("Presenter 'unknown' does not exist");
  });

  it('should render given color token', () => {
    const tokens = [
      {
        token: 'Color',
        declaration: 'varColor',
        value: 'tomato',
      },
    ];
    const { getByTestId } = render(<TokensSummary tokens={tokens} />);

    const colorElement = getByTestId('color');

    expect(colorElement).not.toBeNull();
  });

  it('should render given tokens', () => {
    const tokens = [
      {
        token: 'Color',
        declaration: 'varColor',
        value: 'tomato',
      },

      {
        token: 'Border',
        declaration: 'borderVar',
        value: '1px solid red',
      },
    ];
    const { container, getByTestId } = render(
      <TokensSummary tokens={tokens} />
    );

    const childLen = container.childElementCount;
    const colorElement = getByTestId('color');
    const borderElement = getByTestId('border');

    expect(childLen).toBe(2);
    expect(colorElement).not.toBeNull();
    expect(borderElement).not.toBeNull();
  });
});
