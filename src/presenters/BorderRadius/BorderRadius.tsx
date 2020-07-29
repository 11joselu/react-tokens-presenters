import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type BoderRadiusProps = Token;

const BorderRadius: FC<BoderRadiusProps> = ({ value }: BoderRadiusProps) => {
  return (
    <Card data-testid="borderRadius">
      <Box borderRadius={value} backgroundColor="transparent"></Box>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default BorderRadius;
