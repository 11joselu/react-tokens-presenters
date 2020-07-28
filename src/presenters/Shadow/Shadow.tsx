import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Box from '../../ui/Box/Box';
import Text from '../../ui/Text/Text';
import { TokenDeclaration } from '../TokenDeclaration';

type ShadowProps = TokenDeclaration;

const Shadow: FC<ShadowProps> = ({ name, value }: ShadowProps) => {
  return (
    <Card data-testId="shadow">
      <Box boxShadow={value}></Box>
      <Text>{name}</Text>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default Shadow;
