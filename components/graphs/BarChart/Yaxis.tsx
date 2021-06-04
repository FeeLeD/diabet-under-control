import React, { FC } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

const Yaxis: FC<BoxProps> = ({ ...props }) => {
  return (
    <Box position="absolute" h="100%" w="2px" bg="neutral.60" {...props} />
  );
};

export default Yaxis;
