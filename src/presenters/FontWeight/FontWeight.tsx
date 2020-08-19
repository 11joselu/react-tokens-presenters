import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';
import TokenText from '../../ui/Text/TokenText';

import { Token } from '../TokenDeclaration';

type FontWeightProps = { token: Token };

const FontWeight: FC<FontWeightProps> = ({ token }: FontWeightProps) => {
  return (
    <Card data-testid="FontWeight">
      <Text
        data-testid="fontWeightSample"
        fontWeight={token.value}
        isAlternative={!token.value}
      >
        {token.value ? 'Typograpy weight' : 'unknown'}
      </Text>
      <TokenText token={token} />
    </Card>
  );
};

export default FontWeight;
