import React, { FC } from 'react';
import styled from 'styled-components';

const DEFAULT_SIZE = '4rem';

type BlockProps = {
  borderRadius?: string;
  border?: string;
  padding?: string;
  width?: string;
  height?: string;
  opacity?: string;
  backgroundColor?: string;
  boxShadow?: string;
};

const Box: FC<BlockProps> = styled.div.attrs({
  'data-testid': 'box',
})`
  border: ${(props: BlockProps) => props.border || 'none'};
  border-radius: ${(props: BlockProps) => props.borderRadius || 0};
  width: ${(props: BlockProps) => props.width || DEFAULT_SIZE};
  height: ${(props: BlockProps) => props.height || DEFAULT_SIZE};
  padding: ${(props: BlockProps) => props.padding || 0};
  background-color: ${(props: BlockProps) =>
    props.backgroundColor || '#ea4c89'};
  opacity: ${(props: BlockProps) => props.opacity || 1};
  box-shadow: ${(props: BlockProps) => props.boxShadow || 'none'};
  position: relative;

  p {
    text-align: center;
  }
`;

export default Box;
