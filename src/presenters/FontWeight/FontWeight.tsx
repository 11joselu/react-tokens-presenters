import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type FontWeightProps = Token;

const FontWeight: FC<FontWeightProps> = ({ value }: FontWeightProps) => {
  return (
    <Card data-testid="FontWeight">
      <Text data-testid="fontWeightSample" fontWeight={value}>
        Typograpy weight
      </Text>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default FontWeight;
