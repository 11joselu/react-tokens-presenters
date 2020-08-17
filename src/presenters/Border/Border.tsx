import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type BorderProps = { token: Token };

const Border: FC<BorderProps> = ({ token }: BorderProps) => {
  const hasRefence = typeof token.reference !== 'undefined';
  return (
    <Card data-testid="border">
      <Box border={token.value} backgroundColor="transparent"></Box>
      <Text isAlternative={true}>
        {hasRefence ? token.reference : token.value}
      </Text>
    </Card>
  );
};

export default Border;
