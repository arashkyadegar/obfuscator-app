import { promises as fs } from "fs";
import * as acorn from "acorn";

// Import your custom traverse and fileWrite functions
import { traverseAST } from "./src/Traverse-Node";
import { fileWrite } from "./src/File-Writer";

const main = async () => {
  try {
    // Step 1: Read the JavaScript file
    const filePath = "./source-files/sample.js";
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Step 2: Parse the file into an AST
    const ast = acorn.parse(fileContent, { ecmaVersion: 2020 });

    // Step 3: Traverse the AST and log node types
    traverseAST(ast, (node) => console.log(`Node type: ${node.type}`));

    // Step 4: Save the AST to a JSON file
    const outputPath = "./output-files/modified-code.json";
    await fileWrite(ast, outputPath);

    console.log(`AST saved successfully at ${outputPath}`);
  } catch (error: any) {
    console.error("An error occurred:", error.message);
  }
};

// Execute the program
main();