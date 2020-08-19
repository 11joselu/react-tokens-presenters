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
    margin-right: 1rem;

    p {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      background-color: #fbe090;
      color: #b18621;
      padding: 4px 0;
      border-radius: 4px;
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
