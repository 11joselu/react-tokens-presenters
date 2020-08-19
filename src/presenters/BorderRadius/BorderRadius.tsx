import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import { Token } from '../TokenDeclaration';
import TokenText from '../../ui/Text/TokenText';
import Text from '../../ui/Text/Text';

type BoderRadiusProps = { token: Token };

const BorderRadius: FC<BoderRadiusProps> = ({ token }: BoderRadiusProps) => {
  return (
    <Card data-testid="borderRadius">
      <Box
        borderRadius={token.value || 'unknown'}
        backgroundColor="transparent"
        border={token.value ? '1px solid #91556c' : '1px solid transparent'}
      >
        {!token.value && <Text isAlternative={true}>unknown</Text>}
      </Box>
      <TokenText token={token} />
    </Card>
  );
};

export default BorderRadius;
