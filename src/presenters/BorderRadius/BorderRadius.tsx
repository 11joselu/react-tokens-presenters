import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type BoderRadiusProps = { token: Token };

const BorderRadius: FC<BoderRadiusProps> = ({ token }: BoderRadiusProps) => {
  return (
    <Card data-testid="borderRadius">
      <Box
        borderRadius={token.value}
        backgroundColor="transparent"
        border="1px solid #91556c"
      ></Box>
      <Text isAlternative={true}>{token.value}</Text>
    </Card>
  );
};

export default BorderRadius;
