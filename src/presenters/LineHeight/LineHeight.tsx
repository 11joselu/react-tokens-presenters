import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';
import TokenText from '../../ui/Text/TokenText';

import { Token } from '../TokenDeclaration';
import Box from '../../ui/Box/Box';

type LineHeightProps = { token: Token };

const LineHeight: FC<LineHeightProps> = ({ token }: LineHeightProps) => {
  const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dicta
        assumenda sed distinctio quae, quasi repudiandae nam nobis esse non
        excepturi!`;
  return (
    <Card data-testid="lineHeight">
      {token.value ? (
        <Text
          data-testid="LineHeightSample"
          lineHeight={token.value || 'unknown'}
          isAlternative={!token.value}
        >
          {text}
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

export default LineHeight;
