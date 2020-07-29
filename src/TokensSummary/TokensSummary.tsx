import React, { FC } from 'react';
import { Token } from '../presenters/TokenDeclaration';
import * as presenters from '../presenters';
import Table from '../ui/Table/Table';
import styled from 'styled-components';
import { groupByTokenName } from './groupByTokenName';

const EmptyTokens = styled.div`
  padding: 1rem;
  background-color: #ececec;
  text-align: center;
  color: #707070;
  border-radius: 4px;
  margin: 1rem;
`;

type TokensSummaryProps = {
  tokens: Token[];
};

const TokensSummary: FC<TokensSummaryProps> = ({
  tokens,
}: TokensSummaryProps) => {
  if (!Array.isArray(tokens)) {
    throw new Error(`Tokens should be array, received ${typeof tokens}`);
  }

  if (!tokens.length) {
    return <EmptyTokens>No tokens found</EmptyTokens>;
  }

  const group = groupByTokenName(tokens);

  const tokenTables = Object.entries(group).map(
    ([tokenName, tokenList], index) => {
      return (
        <Table data-testid="tableTokens" key={index}>
          <thead>
            <tr>
              <td>
                <small>{tokenName}</small> Tokens
              </td>
              <td>
                <small>Aa</small> Platform var.
              </td>
            </tr>
          </thead>
          <tbody>
            {tokenList.map(({ token, declaration, value }, index) => {
              const Component = presenters[token];

              if (!Component) {
                throw new Error(`Presenter '${token}' does not exist`);
              }

              return (
                <tr key={index}>
                  <td>
                    <Component value={value} />
                  </td>
                  <td data-testid="declaration">{declaration}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      );
    }
  );

  return <>{tokenTables}</>;
};

export default TokensSummary;
