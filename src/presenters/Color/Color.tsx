import React, { FC } from 'react';
import Circle from '../../ui/Circle/Circle';

type ColorProps = {
  color: string;
  variableName: string;
};

const Color: FC<ColorProps> = ({ color, variableName }: ColorProps) => {
  return (
    <>
      <Circle backgroundColor={color} />
      <p>{color}</p>
      <p>{variableName}</p>
    </>
  );
};

export default Color;
