import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import TokenText from '../../ui/Text/TokenText';
import { Token } from '../TokenDeclaration';
import Box from '../../ui/Box/Box';

type SpacingProps = { token: Token };

const Spacing: FC<SpacingProps> = ({ token }: SpacingProps) => {
  return (
    <Card data-testid="spacing">
      <Box padding={token.value} width={token.value} height={token.value}></Box>
      <TokenText token={token} />
    </Card>
  );
};

export default Spacing;
