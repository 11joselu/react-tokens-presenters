import React, { FC } from 'react';
import Circle from '../../ui/Circle/Circle';
import Text from '../../ui/Text/Text';
import Card from '../../ui/Card/Card';

type ColorProps = {
  color: string;
  variableName: string;
};

const Color: FC<ColorProps> = ({ color, variableName }: ColorProps) => {
  return (
    <Card>
      <Circle backgroundColor={color} />
      <Text>{variableName}</Text>
      <Text isAlternative={true}>{color}</Text>
    </Card>
  );
};

export default Color;
