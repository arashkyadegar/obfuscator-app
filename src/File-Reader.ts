import { promises as fs } from "fs";

export const readSampleFile = async (filePath: string): Promise<string> => {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(filePath, "utf8");

    // Return the file content
    return data;
  } catch (err: any) {
    console.error(`Error reading the file: ${err.message}`);
    throw err; // Throw the error to handle it upstream
  }
};
