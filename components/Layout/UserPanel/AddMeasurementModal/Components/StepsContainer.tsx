import React, { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";

interface Props {
  numberOfSteps: number;
  currentStepNumber: number;
}

const StepsContainer: FC<Props> = ({
  numberOfSteps,
  currentStepNumber,
  children,
}) => {
  return (
    <Box overflow="hidden">
      <Flex
        w={`${numberOfSteps}00%`}
        transition="ease-in-out 0.2s"
        transform={`translateX(-${(100 / numberOfSteps) * currentStepNumber}%)`}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default StepsContainer;
