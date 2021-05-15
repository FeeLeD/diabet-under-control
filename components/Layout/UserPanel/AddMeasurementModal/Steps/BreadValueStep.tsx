import React, { FC } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import GhostInput from "../Components/GhostInput";

interface Props {
  inputRef: React.Ref<HTMLInputElement>;
}

const BreadValueStep: FC<Props> = ({ inputRef }) => {
  return (
    <Box w="100%">
      <Text fontSize="h2">Потребление углеводов</Text>

      <Center mt="50px">
        <Box>
          <GhostInput ref={inputRef} />

          <Text fontSize="32px" textAlign="center">
            ХЕ
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default BreadValueStep;
