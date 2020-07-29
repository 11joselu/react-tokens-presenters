import React, { FC } from 'react';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';
import Card from '../../ui/Card/Card';
import { Token } from '../TokenDeclaration';

type ColorProps = Token;

const Color: FC<ColorProps> = ({ value }: ColorProps) => {
  return (
    <Card data-testid="color">
      <Box backgroundColor={value} border="none" />
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default Color;
