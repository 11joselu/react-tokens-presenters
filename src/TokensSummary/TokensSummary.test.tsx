import React from 'react';
import { render, screen } from '@testing-library/react';
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

  it('should throw error with not valid tokens', () => {
    const tokens = true;

    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      render(<TokensSummary tokens={tokens} />);
    }).toThrowError('Tokens should be array, received boolean');
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

  it('should render empty tokens message when no tokens found', () => {
    const { container } = render(<TokensSummary tokens={[]} />);

    expect(container.children[0].textContent).toBe('No tokens found');
  });

  describe('render table', () => {
    beforeEach(() => {
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
      render(<TokensSummary tokens={tokens} />);
    });

    it('render grouped tokens as a table elements', () => {
      const tables = screen.getAllByTestId('tableTokens');

      expect(tables.length).toBe(2);
    });

    it('should render tokens as a table with his presenters', () => {
      const [colorTable, borderTable] = screen.getAllByTestId('tableTokens');

      expect(colorTable.querySelector('[data-testid=color]')).not.toBeNull();
      expect(colorTable.querySelector('[data-testid=box]')).not.toBeNull();
      expect(borderTable.querySelector('[data-testid=border]')).not.toBeNull();
      expect(borderTable.querySelector('[data-testid=box]')).not.toBeNull();
    });

    it('should render tokens declaration text inside table', () => {
      const [colorTable, borderTable] = screen.getAllByTestId('tableTokens');

      expect(
        colorTable.querySelector('[data-testid=declaration]').textContent
      ).toBe('varColor');
      expect(
        borderTable.querySelector('[data-testid=declaration]').textContent
      ).toBe('borderVar');
    });
  });
});
