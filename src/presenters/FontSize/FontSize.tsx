import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';

import { Token } from '../TokenDeclaration';

type FontSizeProps = { token: Token };

const FontSize: FC<FontSizeProps> = ({ token }: FontSizeProps) => {
  return (
    <Card data-testid="FontSize">
      <Text data-testid="fontSizeSample" fontSize={token.value}>
        Typograpy scale
      </Text>
      <Text isAlternative={true}>{token.value}</Text>
    </Card>
  );
};

export default FontSize;
