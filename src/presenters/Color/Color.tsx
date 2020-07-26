import React, { FC } from 'react';
import Circle from '../../ui/Circle/Circle';

type ColorProps = {
  color: string;
};

const Color: FC<ColorProps> = ({ color }: ColorProps) => {
  return (
    <>
      <Circle backgroundColor={color} />
      <p>{color}</p>;
    </>
  );
};

export default Color;
