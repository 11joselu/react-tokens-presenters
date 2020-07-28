import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { TokenDeclaration } from '../TokenDeclaration';

type WidthProps = TokenDeclaration;

const Width: FC<WidthProps> = ({ declaration, value }: WidthProps) => {
  return (
    <Card data-testid="WidthSampe">
      <Box width={value}></Box>
      <Text>{declaration}</Text>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default Width;
