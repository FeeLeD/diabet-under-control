import React, { FC } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

interface Props {
  title?: string;
  description?: string;
}

const Logo: FC<Props> = ({ title = "", description = "" }) => {
  return (
    <Box>
      <Image w="100px" src="/logo.png" mx="auto" transform="rotate(90deg)" />

      <VStack mt="25px" spacing="12px">
        <Text fontSize="h1" fontWeight="bold">
          {title}
        </Text>
        <Text color="neutral.70">{description}</Text>
      </VStack>
    </Box>
  );
};

export default React.memo(Logo);
