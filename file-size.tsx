import React from "react";
import { Box, Text, Newline } from "ink";

interface FileSizeProps {
  originalSizeKb: number;
  newSizeKb: number;
}

const FileSizeCLI: React.FC<FileSizeProps> = ({
  originalSizeKb,
  newSizeKb,
}) => {
  const calculatePercentageChange = (): string => {
    const change = ((newSizeKb - originalSizeKb) / originalSizeKb) * 100;
    const sign = change >= 0 ? "+" : "-";
    return `${sign}${Math.abs(change).toFixed(2)}%`;
  };

  const percentageChange = calculatePercentageChange();
  const isIncrease = percentageChange.includes("+");

  return (
    <Box flexDirection="column">
      <Box>
        <Text color="cyan">Original Size (KB): </Text>
        <Text>{originalSizeKb} </Text>
        <Text>kB</Text>
      </Box>
      <Box>
        <Text color="cyan">New Size (KB): </Text>
        <Text>{newSizeKb} </Text>
        <Text>kB</Text>
      </Box>
      <Newline />
      <Box>
        <Text color="cyan">Change: </Text>
        <Text color={isIncrease ? "red" : "green"}>{percentageChange}</Text>
      </Box>
    </Box>
  );
};

export default FileSizeCLI;
