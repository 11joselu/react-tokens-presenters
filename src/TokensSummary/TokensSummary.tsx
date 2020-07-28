import React, { FC } from 'react';
import { TokenDeclaration } from '../presenters/TokenDeclaration';
import * as presenters from '../presenters';
import Table from '../ui/Table/Table';

type TokenResult = TokenDeclaration & {
  token: string;
};

type TokensSummaryProps = {
  tokens: TokenResult[];
};

const TokensSummary: FC<TokensSummaryProps> = ({
  tokens,
}: TokensSummaryProps) => {
  return (
    <Table>
      <thead>
        <tr>
          <td>TOKEN NAME</td>
          <td>PLATFORM VAR.</td>
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
                <Component declaration={declaration} value={value} />
              </td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TokensSummary;
