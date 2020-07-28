import React, { FC } from 'react';
import { TokenDeclaration } from '../presenters/TokenDeclaration';
import * as presenters from '../presenters';

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
    <>
      {tokens.map((result, index) => {
        const Component = presenters[result.token];

        if (!Component) {
          throw new Error(`Presenter '${result.token}' does not exist`);
        }

        return (
          <div>
            {index === 0 ? <h1>{result.token}</h1> : null}
            <Component declaration={result.declaration} value={result.value} />
          </div>
        );
      })}
    </>
  );
};

export default TokensSummary;
