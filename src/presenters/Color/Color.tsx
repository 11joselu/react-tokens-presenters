import React, { FC } from 'react';
import Circle from '../../ui/Circle/Circle';
import Text from '../../ui/Text/Text';

type ColorProps = {
  color: string;
  variableName: string;
};

const Color: FC<ColorProps> = ({ color, variableName }: ColorProps) => {
  return (
    <>
      <Circle backgroundColor={color} />
      <Text>{variableName}</Text>
      <Text isAlternative={true}>{color}</Text>
    </>
  );
};

export default Color;
