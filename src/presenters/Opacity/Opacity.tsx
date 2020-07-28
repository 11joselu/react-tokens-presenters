import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { TokenDeclaration } from '../TokenDeclaration';

type OpacityProps = TokenDeclaration;

const Opacity: FC<OpacityProps> = ({ value }: OpacityProps) => {
  return (
    <Card data-testid="opacity">
      <Box opacity={value}></Box>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default Opacity;
