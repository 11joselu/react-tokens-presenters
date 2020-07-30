import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';
import { Token } from '../TokenDeclaration';

type ShadowProps = { token: Token };

const Shadow: FC<ShadowProps> = ({ token }: ShadowProps) => {
  return (
    <Card data-testid="shadow">
      <Box boxShadow={token.value}></Box>
      <Text isAlternative={true}>{token.value}</Text>
    </Card>
  );
};

export default Shadow;
