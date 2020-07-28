import React, { FC } from 'react';
import { TokenDeclaration } from '../presenters/TokenDeclaration';
import * as presenters from '../presenters';
import Table from '../ui/Table/Table';
import styled from 'styled-components';

const EmptyTokens = styled.div`
  padding: 1rem;
  background-color: #ececec;
  text-align: center;
  color: #707070;
  border-radius: 4px;
  margin: 1rem;
`;

type TokenResult = TokenDeclaration & {
  token: string;
};

type TokensSummaryProps = {
  tokens: TokenResult[];
};

const TokensSummary: FC<TokensSummaryProps> = ({
  tokens,
}: TokensSummaryProps) => {
  if (!Array.isArray(tokens) || !tokens.length) {
    return <EmptyTokens>No tokens founds</EmptyTokens>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <td>Tokens</td>
          <td>
            <small>Aa</small> Platform var.
          </td>
        </tr>
      </thead>
      <tbody>
        {tokens.map(({ token, declaration, value }, index) => {
          const Component = presenters[token];

          if (!Component) {
            throw new Error(`Presenter '${token}' does not exist`);
          }

          return (
            <tr key={index}>
              <td>
                <Component value={value} />
              </td>
              <td>{declaration}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TokensSummary;
