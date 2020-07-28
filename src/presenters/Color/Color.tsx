import React, { FC } from 'react';
import Circle from '../../ui/Circle/Circle';
import Text from '../../ui/Text/Text';
import Card from '../../ui/Card/Card';
import { TokenDeclaration } from '../TokenDeclaration';

type ColorProps = TokenDeclaration;

const Color: FC<ColorProps> = ({ value }: ColorProps) => {
  return (
    <Card data-testid="color">
      <Circle backgroundColor={value} />
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default Color;
