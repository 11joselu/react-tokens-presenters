import React, { FC } from 'react';
import styled from 'styled-components';

const Card: FC = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  > *:first-child {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 600) {
    flex-direction: column;

    > *:first-child {
      margin-bottom: 0;
    }
  }
`;

export default Card;
