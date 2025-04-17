import acorn from "acorn";
import { Program } from "estree";

export const acronParser = (code: string): acorn.Program => {
  const ast = acorn.parse(code, { ecmaVersion: 2020 });

  return ast;
};
