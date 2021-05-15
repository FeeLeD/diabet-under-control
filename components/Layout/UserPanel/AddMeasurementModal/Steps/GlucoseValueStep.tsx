import React, { FC } from "react";
import { Box, Center, Text } from "@chakra-ui/layout";
import GhostInput from "../Components/GhostInput";

interface Props {
  inputRef: React.Ref<HTMLInputElement>;
}

const GlucoseValueStep: FC<Props> = ({ inputRef }) => {
  return (
    <Box w="100%">
      <Text fontSize="h2">Укажите уровень глюкозы в крови</Text>

      <Center mt="50px">
        <Box>
          <GhostInput ref={inputRef} />

          <Text fontSize="32px" textAlign="center">
            ммоль / л
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default GlucoseValueStep;
