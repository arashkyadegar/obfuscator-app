import { promises as fs } from "fs"; // Use the fs module for file operations

export const fileWrite = async (ast: object, outputPath: string) => {
  // Convert the AST object to a string (JSON format)
  const astString = JSON.stringify(ast, null, 2); // Pretty-printed JSON with 2-space indentation

  // Save the JSON string to the specified file
  await fs.writeFile(outputPath, astString, "utf-8");
};