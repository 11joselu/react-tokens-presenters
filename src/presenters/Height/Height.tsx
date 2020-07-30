import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type HeightProps = { token: Token };

const Height: FC<HeightProps> = ({ token }: HeightProps) => {
  return (
    <Card data-testid="HeightSampe">
      <Box height={token.value}></Box>
      <Text isAlternative={true}>{token.value}</Text>
    </Card>
  );
};

export default Height;
