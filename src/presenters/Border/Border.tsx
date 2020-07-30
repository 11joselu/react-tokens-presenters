import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type BorderProps = { token: Token };

const Border: FC<BorderProps> = ({ token }: BorderProps) => {
  return (
    <Card data-testid="border">
      <Box border={token.value} backgroundColor="transparent"></Box>
      <Text isAlternative={true}>{token.value}</Text>
    </Card>
  );
};

export default Border;
