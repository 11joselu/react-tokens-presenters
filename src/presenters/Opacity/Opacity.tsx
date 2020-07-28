import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { TokenDeclaration } from '../TokenDeclaration';

type OpacityProps = TokenDeclaration;

const Opacity: FC<OpacityProps> = ({ name, value }: OpacityProps) => {
  return (
    <Card data-testid="opacity">
      <Box opacity={value}></Box>
      <Text>{name}</Text>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default Opacity;
