import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { TokenDeclaration } from '../TokenDeclaration';

type BoderRadiusProps = TokenDeclaration;

const Color: FC<BoderRadiusProps> = ({ name, value }: BoderRadiusProps) => {
  return (
    <Card>
      <Box borderRadius={value}></Box>
      <Text>{name}</Text>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default Color;
