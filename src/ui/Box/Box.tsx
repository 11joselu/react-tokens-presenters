import React, { FC } from 'react';
import styled from 'styled-components';

type BlockProps = {
  borderRadius: string;
};

const Box: FC<BlockProps> = styled.div.attrs({
  'data-testid': 'box',
})`
  border: 1px solid #2b2b2b;
  border-radius: ${(props: BlockProps) => props.borderRadius || 0};
  width: 120px;
  height: 100px;
`;

export default Box;
