import React, { FC } from 'react';
import styled from 'styled-components';

import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';
import { TokenDeclaration } from '../TokenDeclaration';
import Box from '../../ui/Box/Box';

type SpacingProps = TokenDeclaration;

const Spacing: FC<SpacingProps> = ({ value }: SpacingProps) => {
  return (
    <Card data-testid="spacing">
      <Box padding={value} width={value} height={value}></Box>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default Spacing;
