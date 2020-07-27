import React, { FC } from 'react';
import styled from 'styled-components';

type BlockProps = {
  borderRadius?: string;
  border?: string;
};

const Box: FC<BlockProps> = styled.div.attrs({
  'data-testid': 'box',
})`
  border: ${(props: BlockProps) => props.border || '1px solid #2b2b2b'};
  border-radius: ${(props: BlockProps) => props.borderRadius || 0};
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
`;

export default Box;
