import * as acorn from "acorn";

export const acronParser = (code: string): acorn.Node => {
  const ast = acorn.parse(code, { ecmaVersion: 2020 });

  return ast;
};