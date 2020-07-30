import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type FontWeightProps = { token: Token };

const FontWeight: FC<FontWeightProps> = ({ token }: FontWeightProps) => {
  return (
    <Card data-testid="FontWeight">
      <Text data-testid="fontWeightSample" fontWeight={token.value}>
        Typograpy weight
      </Text>
      <Text isAlternative={true}>{token.value}</Text>
    </Card>
  );
};

export default FontWeight;
