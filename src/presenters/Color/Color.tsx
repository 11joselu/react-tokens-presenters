import React, { FC } from 'react';
import Box from '../../ui/Box/Box';
import TokenText from '../../ui/Text/TokenText';
import Card from '../../ui/Card/Card';
import { Token } from '../TokenDeclaration';

type ColorProps = { token: Token };

const Color: FC<ColorProps> = ({ token }: ColorProps) => {
  return (
    <Card data-testid="color">
      <Box backgroundColor={token.value} border="none" />
      <TokenText token={token} />
    </Card>
  );
};

export default Color;
