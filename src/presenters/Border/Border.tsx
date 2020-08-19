import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import TokenText from '../../ui/Text/TokenText';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type BorderProps = { token: Token };

const Border: FC<BorderProps> = ({ token }: BorderProps) => {
  return (
    <Card data-testid="border">
      <Box border={token.value || 'unknown'} backgroundColor="transparent">
        {!token.value && <Text isAlternative={true}>unknown</Text>}
      </Box>
      <TokenText token={token} />
    </Card>
  );
};

export default Border;
