import React, { FC } from "react";
import { HStack, Box, StackProps } from "@chakra-ui/react";

interface Props extends StackProps {
  numberOfSteps: number;
  currentStepNumber: number;
}

const ProgressBar: FC<Props> = ({
  numberOfSteps,
  currentStepNumber,
  ...props
}) => {
  return (
    <HStack spacing={0} {...props}>
      <Box
        w={`${(100 / numberOfSteps) * (currentStepNumber + 1)}%`}
        h="4px"
        transition="ease-in-out 0.2s"
        bg="green.60"
        borderRadius="50px 0 0 50px"
      />

      <Box
        w={`${
          (100 / numberOfSteps) * (numberOfSteps - currentStepNumber - 1)
        }%`}
        h="4px"
        transition="ease-in-out 0.2s"
        bg="neutral.50"
        borderRadius="0 50px 50px 0"
      />
    </HStack>
  );
};

export default ProgressBar;
