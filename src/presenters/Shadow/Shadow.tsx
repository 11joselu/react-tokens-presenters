import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import TokenText from '../../ui/Text/TokenText';
import Text from '../../ui/Text/Text';
import { Token } from '../TokenDeclaration';

type ShadowProps = { token: Token };

const Shadow: FC<ShadowProps> = ({ token }: ShadowProps) => {
  return (
    <Card data-testid="shadow">
      <Box
        boxShadow={token.value || 'unknown'}
        backgroundColor={token.value ? undefined : 'unknown'}
      >
        {!token.value && <Text isAlternative={true}>unknown</Text>}
      </Box>
      <TokenText token={token} />
    </Card>
  );
};

export default Shadow;
