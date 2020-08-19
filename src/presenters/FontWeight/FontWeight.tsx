import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';
import TokenText from '../../ui/Text/TokenText';

import { Token } from '../TokenDeclaration';
import Box from '../../ui/Box/Box';

type FontWeightProps = { token: Token };

const FontWeight: FC<FontWeightProps> = ({ token }: FontWeightProps) => {
  return (
    <Card data-testid="FontWeight">
      {token.value ? (
        <Text
          data-testid="fontWeightSample"
          fontWeight={token.value || 'unknown'}
          isAlternative={!token.value}
        >
          Typograpy weight
        </Text>
      ) : (
        <Box backgroundColor={'transparent'}>
          <Text>unknown</Text>
        </Box>
      )}

      <TokenText token={token} />
    </Card>
  );
};

export default FontWeight;
