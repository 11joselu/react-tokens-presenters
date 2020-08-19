import React, { FC } from 'react';
import styled from 'styled-components';

const Card: FC = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  > *:first-child {
    margin-right: 1.5rem;

    p {
      position: relative;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      background-color: #f4f3f0;
      color: #b7b7b7;
      padding: 6px;
      border-radius: 4px;
      margin-right: 4px;
    }
  }

  p {
    margin: 0;
  }

  @media (max-width: 600) {
    flex-direction: column;

    > *:first-child {
      margin-bottom: 0;
    }
  }
`;

export default Card;
