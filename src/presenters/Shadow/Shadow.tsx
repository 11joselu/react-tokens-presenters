import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import TokenText from '../../ui/Text/TokenText';
import { Token } from '../TokenDeclaration';

type ShadowProps = { token: Token };

const Shadow: FC<ShadowProps> = ({ token }: ShadowProps) => {
  return (
    <Card data-testid="shadow">
      <Box boxShadow={token.value}></Box>
      <TokenText token={token} />
    </Card>
  );
};

export default Shadow;
