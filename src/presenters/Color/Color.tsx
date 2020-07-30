import React, { FC } from 'react';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';
import Card from '../../ui/Card/Card';
import { Token } from '../TokenDeclaration';

type ColorProps = { token: Token };

const Color: FC<ColorProps> = ({ token }: ColorProps) => {
  return (
    <Card data-testid="color">
      <Box backgroundColor={token.value} border="none" />
      <Text isAlternative={true}>{token.value}</Text>
    </Card>
  );
};

export default Color;
