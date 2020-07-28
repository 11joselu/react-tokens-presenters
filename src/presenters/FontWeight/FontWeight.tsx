import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';

import { TokenDeclaration } from '../TokenDeclaration';

type FontWeightProps = TokenDeclaration;

const FontWeight: FC<FontWeightProps> = ({
  declaration,
  value,
}: FontWeightProps) => {
  return (
    <Card data-testid="FontWeight">
      <Text data-testid="fontWeightSample" fontWeight={value}>
        Typograpy weight
      </Text>
      <Text>{declaration}</Text>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default FontWeight;
