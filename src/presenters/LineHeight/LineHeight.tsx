import React, { FC } from 'react';
import Card from '../../ui/Card/Card';
import Text from '../../ui/Text/Text';
import TokenText from '../../ui/Text/TokenText';

import { Token } from '../TokenDeclaration';

type LineHeightProps = { token: Token };

const LineHeight: FC<LineHeightProps> = ({ token }: LineHeightProps) => {
  const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dicta
        assumenda sed distinctio quae, quasi repudiandae nam nobis esse non
        excepturi!`;
  return (
    <Card data-testid="lineHeight">
      <Text
        data-testid="LineHeightSample"
        lineHeight={token.value || 'unknown'}
        isAlternative={!token.value}
      >
        {token.value ? text : 'unknown'}
      </Text>
      <TokenText token={token} />
    </Card>
  );
};

export default LineHeight;
