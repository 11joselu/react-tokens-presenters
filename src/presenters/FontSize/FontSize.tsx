import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type FontSizeProps = Token;

const FontSize: FC<FontSizeProps> = ({ value }: FontSizeProps) => {
  return (
    <Card data-testid="FontSize">
      <Text data-testid="fontSizeSample" fontSize={value}>
        Typograpy scale
      </Text>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default FontSize;
