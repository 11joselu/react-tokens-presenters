import React, { FC } from 'react';
import styled from 'styled-components';

const Flex: FC = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Flex;
