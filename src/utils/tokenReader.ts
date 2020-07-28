import { scssParser } from 'design-tokens-parser';

// Since require.context only works in compilation process
// we need to read everything related to the presenters folder
const scssReq = require.context(
  `!!raw-loader!../presenters`,
  true,
  /tokens.scss$/
);

const files = scssReq.keys();

export const readTokensFromFile = (componentName: string) => {
  return (
    files
      //  We need to filter all available files by the one that really interests us
      .filter((filename) => filename.includes(`/${componentName}/`))
      .map((filename) => scssReq(filename).default)
      .map(scssParser)
      .flat()
  );
};
