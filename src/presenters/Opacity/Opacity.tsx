import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import TokenText from '../../ui/Text/TokenText';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type OpacityProps = { token: Token };

const Opacity: FC<OpacityProps> = ({ token }: OpacityProps) => {
  return (
    <Card data-testid="opacity">
      <Box
        opacity={token.value}
        backgroundColor={token.value ? undefined : 'unknown'}
      >
        {!token.value && <Text isAlternative={true}>unknown</Text>}
      </Box>
      <TokenText token={token} />
    </Card>
  );
};

export default Opacity;
