import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type OpacityProps = { token: Token };

const Opacity: FC<OpacityProps> = ({ token }: OpacityProps) => {
  return (
    <Card data-testid="opacity">
      <Box opacity={token.value}></Box>
      <Text isAlternative={true}>{token.value}</Text>
    </Card>
  );
};

export default Opacity;
