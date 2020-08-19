import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';
import TokenText from '../../ui/Text/TokenText';

import { Token } from '../TokenDeclaration';
import Box from '../../ui/Box/Box';

type FontSizeProps = { token: Token };

const FontSize: FC<FontSizeProps> = ({ token }: FontSizeProps) => {
  return (
    <Card data-testid="FontSize">
      {token.value ? (
        <Text
          data-testid="fontSizeSample"
          fontSize={token.value}
          isAlternative={!token.value}
        >
          Typograpy scale
        </Text>
      ) : (
        <Box backgroundColor={'transparent'}>
          <Text>unknown</Text>
        </Box>
      )}

      <TokenText token={token} />
    </Card>
  );
};

export default FontSize;
