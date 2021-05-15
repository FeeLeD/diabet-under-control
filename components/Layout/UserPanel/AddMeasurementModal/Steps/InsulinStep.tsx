import React, { FC, useState } from "react";
import { Box, Center, HStack, Text } from "@chakra-ui/react";
import { Toggle } from "components/basic/toggles/";
import GhostInput from "../Components/GhostInput";

interface Props {
  shortInputRef: React.Ref<HTMLInputElement>;
  longInputRef: React.Ref<HTMLInputElement>;
}

type InsulinType = "Короткий" | "Длинный";

const InsulinStep: FC<Props> = ({ shortInputRef, longInputRef }) => {
  const [typeOfInsulin, setTypeOfInsulin] = useState<InsulinType>("Короткий");

  return (
    <Box w="100%">
      <HStack justify="space-between" p="1px">
        <Text fontSize="h2">Введенный инсулин</Text>

        <Toggle
          w="250px"
          values={["Короткий", "Длинный"]}
          onToggle={(value) => setTypeOfInsulin(value as InsulinType)}
        />
      </HStack>

      <Center mt="50px">
        <Box>
          <Box h="96px" overflow="hidden">
            <Box
              transition="ease-in-out 0.2s"
              transform={`translateY(-${
                typeOfInsulin === "Длинный" ? 96 : 0
              }px)`}
            >
              <GhostInput display="block" ref={shortInputRef} />
              <GhostInput display="block" ref={longInputRef} />
            </Box>
          </Box>

          <Text fontSize="32px" textAlign="center">
            Единиц
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default InsulinStep;
