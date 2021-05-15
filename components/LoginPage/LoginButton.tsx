import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import { ChevronRightIcon } from "components/basic/icons";
import { FilledButton } from "components/basic/buttons";

const LoginButton: FC = () => {
  return (
    <FilledButton position="relative" w="100%" mt="54px">
      <Text>Войти</Text>

      <Box position="absolute" right="25px">
        <ChevronRightIcon color="white" />
      </Box>
    </FilledButton>
  );
};

export default LoginButton;
