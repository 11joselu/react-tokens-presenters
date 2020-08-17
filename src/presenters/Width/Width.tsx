import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import TokenText from '../../ui/Text/TokenText';

import { Token } from '../TokenDeclaration';

type WidthProps = { token: Token };

const Width: FC<WidthProps> = ({ token }: WidthProps) => {
  return (
    <Card data-testid="WidthSampe">
      <Box width={token.value}></Box>
      <TokenText token={token} />
    </Card>
  );
};

export default Width;
