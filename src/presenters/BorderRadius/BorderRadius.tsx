import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';

type BoderRadiusProps = {
  value: string;
};

const Color: FC<BoderRadiusProps> = ({ value }: BoderRadiusProps) => {
  return (
    <Card>
      <Box borderRadius={value}></Box>
    </Card>
  );
};

export default Color;
