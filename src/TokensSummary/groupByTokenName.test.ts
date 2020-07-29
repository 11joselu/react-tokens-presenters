import { groupByTokenName } from './groupByTokenName';

describe('groupByTokenName', () => {
  it('given and array of tokens should group by Token name', () => {
    const tokens = [
      {
        token: 'Color',
        declaration: 'varColor',
        value: 'red',
      },
      {
        token: 'Border',
        declaration: 'varBorder',
        value: '1px solid red',
      },
      {
        token: 'Shadow',
        declaration: 'varShadow',
        value: '5px',
      },
      {
        token: 'Color',
        declaration: 'varColorTwo',
        value: 'tomato',
      },
      {
        token: 'Border',
        declaration: 'varBorderTwo',
        value: '1px solid tomato',
      },
    ];

    const expectedTokensOrder = {
      Color: [
        {
          token: 'Color',
          declaration: 'varColor',
          value: 'red',
        },
        {
          token: 'Color',
          declaration: 'varColorTwo',
          value: 'tomato',
        },
      ],
      Border: [
        {
          token: 'Border',
          declaration: 'varBorder',
          value: '1px solid red',
        },
        {
          token: 'Border',
          declaration: 'varBorderTwo',
          value: '1px solid tomato',
        },
      ],
      Shadow: [
        {
          token: 'Shadow',
          declaration: 'varShadow',
          value: '5px',
        },
      ],
    };

    const orderItems = groupByTokenName(tokens);

    expect(orderItems).toMatchObject(expectedTokensOrder);
  });
});
