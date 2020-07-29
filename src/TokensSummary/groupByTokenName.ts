import { Token } from '../presenters/TokenDeclaration';

type TokensGroup = Record<string, Token[]>;

export function groupByTokenName(tokens: Token[]): TokensGroup {
  return tokens.reduce((grouped, token) => {
    const currentGroupedTokens = grouped[token.token] || [];
    grouped[token.token] = [...currentGroupedTokens, token];

    return grouped;
  }, {});
}
