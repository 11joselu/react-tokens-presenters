import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';
import TokenText from '../../ui/Text/TokenText';

import { Token } from '../TokenDeclaration';

type FontSizeProps = { token: Token };

const FontSize: FC<FontSizeProps> = ({ token }: FontSizeProps) => {
  return (
    <Card data-testid="FontSize">
      <Text data-testid="fontSizeSample" fontSize={token.value}>
        Typograpy scale
      </Text>
      <TokenText token={token} />
    </Card>
  );
};

export default FontSize;
