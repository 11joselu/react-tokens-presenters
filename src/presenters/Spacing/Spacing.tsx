import React, { FC } from 'react';
import styled from 'styled-components';

import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';
import { Token } from '../TokenDeclaration';
import Box from '../../ui/Box/Box';

type SpacingProps = { token: Token };

const Spacing: FC<SpacingProps> = ({ token }: SpacingProps) => {
  return (
    <Card data-testid="spacing">
      <Box padding={token.value} width={token.value} height={token.value}></Box>
      <Text isAlternative={true}>{token.value}</Text>
    </Card>
  );
};

export default Spacing;
