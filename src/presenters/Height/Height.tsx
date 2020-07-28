import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';

import { TokenDeclaration } from '../TokenDeclaration';

type HeightProps = TokenDeclaration;

const Height: FC<HeightProps> = ({ value }: HeightProps) => {
  return (
    <Card data-testid="HeightSampe">
      <Box height={value}></Box>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default Height;
