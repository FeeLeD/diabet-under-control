import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import { api } from "api";
import { useApiWithoutResponse } from "hooks/useApi";
import { badToast } from "utils/toasts";
import { useToast } from "@chakra-ui/toast";
import { Box, Center, Stack } from "@chakra-ui/layout";
import { DefaultInput } from "components/basic/inputs";
import { FilledButton } from "components/basic/buttons";
import { InternalLink } from "components/basic/links";
import Logo from "components/Layout/Logo";

const RegistrationPage: FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, register] = useApiWithoutResponse(api.account.register);

  const onRegister = async () => {
    try {
      await register({ email, firstName, lastName, password });

      // magic

      router.push("/");
    } catch (err) {
      toast(badToast);
    }
  };

  return (
    <Center h="100vh" flexDirection="column">
      <Box w="343px">
        <Logo title="Регистрация" />

        <Stack mt="44px">
          <DefaultInput
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            w="343px"
            placeholder="Почта"
          />
          <DefaultInput
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
            w="343px"
            placeholder="Имя"
          />
          <DefaultInput
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)}
            w="343px"
            placeholder="Фамилия"
          />
          <DefaultInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            w="343px"
            placeholder="Пароль"
          />
        </Stack>

        <FilledButton
          w="100%"
          mt="60px"
          isLoading={loading}
          isDisabled={!email || !firstName || !lastName || !password}
          onClick={onRegister}
        >
          Регистрация
        </FilledButton>

        <InternalLink href="/" mt="12px" textAlign="center" fontSize="p">
          Назад к авторизации
        </InternalLink>
      </Box>
    </Center>
  );
};

export default RegistrationPage;
