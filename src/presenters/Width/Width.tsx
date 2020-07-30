import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type WidthProps = { token: Token };

const Width: FC<WidthProps> = ({ token }: WidthProps) => {
  return (
    <Card data-testid="WidthSampe">
      <Box width={token.value}></Box>
      <Text isAlternative={true}>{token.value}</Text>
    </Card>
  );
};

export default Width;
