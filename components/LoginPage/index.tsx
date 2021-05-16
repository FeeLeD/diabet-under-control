import React, { FC } from "react";
import { Center, Box, HStack, Text } from "@chakra-ui/react";
import Logo from "components/Layout/Logo";
import LoginForm from "./LoginForm";

const LoginPage: FC = () => {
  return (
    <Center h="100vh">
      <Box>
        <Logo
          title="Добрый день!"
          description="Введите свою почту и пароль, чтобы войти"
        />

        <LoginForm />

        <HStack mt="43px" fontSize="p" justify="center">
          <Text color="neutral.70">У вас нет аккаунта?</Text>
          <Text color="ink.40">Зарегистрируйтесь</Text>
        </HStack>
      </Box>
    </Center>
  );
};

export default LoginPage;
