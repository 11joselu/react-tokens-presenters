import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import { Token } from '../TokenDeclaration';
import TokenText from '../../ui/Text/TokenText';

type BoderRadiusProps = { token: Token };

const BorderRadius: FC<BoderRadiusProps> = ({ token }: BoderRadiusProps) => {
  return (
    <Card data-testid="borderRadius">
      <Box
        borderRadius={token.value}
        backgroundColor="transparent"
        border="1px solid #91556c"
      ></Box>
      <TokenText token={token} />
    </Card>
  );
};

export default BorderRadius;
