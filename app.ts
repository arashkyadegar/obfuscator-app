import * as http from "http";
import * as dotenv from "dotenv";
import { readSampleFile } from "./src/File-Reader";
import { acronParser } from "./src/Acorn-Parser";

// Load environment variables from .env file
dotenv.config();

// Get the port from environment variables, with a fallback to 3000
const PORT = process.env.PORT || 3000;

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  readSampleFile("./source-files/sample.js")
    .then((file: string) => {
      // Parse the file with Acorn and send AST as JSON response
      const ast = acronParser(file);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(ast, null, 2)); // Pretty-print the JSON output
    })
    .catch((err: Error) => {
      // Handle file read errors
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Error reading the file: ${err.message}`);
    });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
