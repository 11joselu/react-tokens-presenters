import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import TokenText from '../../ui/Text/TokenText';

import { Token } from '../TokenDeclaration';

type HeightProps = { token: Token };

const Height: FC<HeightProps> = ({ token }: HeightProps) => {
  return (
    <Card data-testid="HeightSampe">
      <Box height={token.value}></Box>
      <TokenText token={token} />
    </Card>
  );
};

export default Height;
