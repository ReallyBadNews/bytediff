import { render } from "ink";
import React from "react";
import FileSizeCLI from "./file-size";

const main = () => {
  const args = process.argv.slice(2);
  const originalSizeKb = parseInt(args[0]);
  const newSizeKb = parseInt(args[1]);

  // Handle invalid inputs as needed

  render(<FileSizeCLI originalSizeKb={originalSizeKb} newSizeKb={newSizeKb} />);
};

main();
