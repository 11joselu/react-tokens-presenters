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
    <Card data-testid="LineHeightSample">
      <Text
        data-testid="fontWeightSample"
        lineHeight={value}
        isAlternative={true}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dicta
        assumenda sed distinctio quae, quasi repudiandae nam nobis esse non
        excepturi!
      </Text>
      <Text>{declaration}</Text>
      <Text isAlternative={true}>{value}</Text>
    </Card>
  );
};

export default FontWeight;
