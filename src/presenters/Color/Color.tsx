import React, { FC } from 'react';
import Circle from '../../ui/Circle/Circle';
import Text from '../../ui/Text/Text';
import Card from '../../ui/Card/Card';
import { TokenDeclaration } from '../TokenDeclaration';

type ColorProps = TokenDeclaration;

const Color: FC<ColorProps> = ({ value, name }: ColorProps) => {
  return (
    <Card data-testId="color">
      <Circle backgroundColor={value} />
      <Text>{name}</Text>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default Color;
