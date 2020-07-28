import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';

import { TokenDeclaration } from '../TokenDeclaration';

type FontSizeProps = TokenDeclaration;

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
