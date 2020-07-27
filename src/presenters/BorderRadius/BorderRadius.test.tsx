import React from 'react';
import { render } from '@testing-library/react';
import BorderRadius from './BorderRadius';

describe('BoderRadius', () => {
  it('render given borderRadius', () => {
    const { getByTestId } = render(<BorderRadius value="30%" />);

    const borderredElement = getByTestId('box');
    const styles = window.getComputedStyle(borderredElement);

    expect(styles['border-radius']).toBe('30%');
  });
});
