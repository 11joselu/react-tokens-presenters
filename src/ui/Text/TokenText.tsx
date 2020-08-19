import React, { FC } from 'react';
import { Token } from '../../presenters/TokenDeclaration';
import Text from './Text';
import styled from 'styled-components';

type TokenTextProps = {
  token: Token;
};

const TokenText: FC<TokenTextProps> = ({ token }: TokenTextProps) => {
  const hasRefence = typeof token.reference !== 'undefined';

  return (
    <Text isAlternative={true}>
      {hasRefence ? token.reference : token.value}
    </Text>
  );
};

export default TokenText;
