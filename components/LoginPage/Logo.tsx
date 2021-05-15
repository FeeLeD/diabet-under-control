import React, { FC } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

const Logo: FC = () => {
  return (
    <Box>
      <Image w="100px" src="/logo.png" mx="auto" transform="rotate(90deg)" />

      <VStack mt="45px" spacing="12px">
        <Text fontSize="h1" fontWeight="bold">
          Добрый день!
        </Text>
        <Text color="neutral.70">Введите свою почту и пароль, чтобы войти</Text>
      </VStack>
    </Box>
  );
};

export default React.memo(Logo);
