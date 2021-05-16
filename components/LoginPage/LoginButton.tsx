import React, { FC } from "react";
import { Box, ButtonProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import { ChevronRightIcon } from "components/basic/icons";
import { FilledButton } from "components/basic/buttons";

const LoginButton: FC<ButtonProps> = ({ ...props }) => {
  return (
    <FilledButton  w="100%" position="relative" {...props}>
      <Text>Войти</Text>

      <Box position="absolute" right="25px">
        <ChevronRightIcon color="white" />
      </Box>
    </FilledButton>
  );
};

export default LoginButton;
