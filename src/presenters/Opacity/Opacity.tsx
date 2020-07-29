import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type OpacityProps = Token;

const Opacity: FC<OpacityProps> = ({ value }: OpacityProps) => {
  return (
    <Card data-testid="opacity">
      <Box opacity={value}></Box>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default Opacity;
