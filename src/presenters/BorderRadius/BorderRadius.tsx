import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { TokenDeclaration } from '../TokenDeclaration';

type BoderRadiusProps = TokenDeclaration;

const BorderRadius: FC<BoderRadiusProps> = ({
  declaration,
  value,
}: BoderRadiusProps) => {
  return (
    <Card data-testid="borderRadius">
      <Box borderRadius={value} backgroundColor="transparent"></Box>
      <Text>{declaration}</Text>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default BorderRadius;
