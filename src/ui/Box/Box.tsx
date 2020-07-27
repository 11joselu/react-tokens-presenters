import React, { FC } from 'react';
import styled from 'styled-components';

type BlockProps = {
  borderRadius?: string;
  border?: string;
  padding?: string;
  width?: string;
  height?: string;
  opacity?: string;
  backgroundColor?: string;
};

const Box: FC<BlockProps> = styled.div.attrs({
  'data-testid': 'box',
})`
  border: ${(props: BlockProps) => props.border || '1px solid #ff7300'};
  border-radius: ${(props: BlockProps) => props.borderRadius || 0};
  width: ${(props: BlockProps) => props.width || '5rem'};
  height: ${(props: BlockProps) => props.height || '5rem'};
  margin: 0 auto;
  padding: ${(props: BlockProps) => props.padding || 0};
  background-color: ${(props: BlockProps) =>
    props.backgroundColor || 'rgba(255, 152, 0, 0.5)'};
  opacity: ${(props: BlockProps) => props.opacity || 1};
`;

export default Box;
