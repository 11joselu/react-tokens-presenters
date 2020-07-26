import React, { FC } from 'react';
import styled from 'styled-components';

type CircleProps = {
  backgroundColor: string;
};

const Circle: FC<CircleProps> = styled.div.attrs({
  'data-testid': 'circle',
})`
  width: '50px';
  height: '50px';
  border-radius: '50%';
  background-color: ${(props: CircleProps) => props.backgroundColor};
`;

export default Circle;
