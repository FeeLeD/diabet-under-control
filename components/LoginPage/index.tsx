import React, { FC } from "react";
import { Center, Box, VStack, Flex, HStack, Text } from "@chakra-ui/react";
import { UserIcon, LockIcon } from "components/basic/icons";
import { DefaultInput } from "components/basic/inputs/";
import LoginButton from "./LoginButton";
import Logo from "./Logo";

const LoginPage: FC = () => {
  return (
    <Center h="100vh">
      <Box>
        <Logo />

        <VStack mt="60px" spacing="40px">
          <DefaultInput
            w="345px"
            placeholder="Введите E-mail"
            leftElement={<UserIcon color="#696C74" />}
          />
          <DefaultInput
            w="345px"
            placeholder="Введите пароль"
            leftElement={<LockIcon color="#696C74" />}
          />
        </VStack>

        <Flex mt="16px" justify="flex-end">
          <Text fontSize="p">Забыли пароль?</Text>
        </Flex>

        <LoginButton />

        <HStack mt="43px" fontSize="p" justify="center">
          <Text color="neutral.70">У вас нет аккаунта?</Text>
          <Text color="ink.40">Зарегистрируйтесь</Text>
        </HStack>
      </Box>
    </Center>
  );
};

export default LoginPage;
