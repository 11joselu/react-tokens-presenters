import React, { FC } from 'react';
import styled from 'styled-components';

const Card: FC = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  display: flex;
  > *:first-child {
    margin-right: 1rem;
  }
`;

export default Card;
