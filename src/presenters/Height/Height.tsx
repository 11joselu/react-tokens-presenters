import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import TokenText from '../../ui/Text/TokenText';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type HeightProps = { token: Token };

const Height: FC<HeightProps> = ({ token }: HeightProps) => {
  return (
    <Card data-testid="HeightSampe">
      <Box
        height={token.value || 'unknown'}
        backgroundColor={token.value ? undefined : 'unknown'}
      >
        {!token.value && <Text isAlternative={true}>unknown</Text>}
      </Box>
      <TokenText token={token} />
    </Card>
  );
};

export default Height;
