import React, { FC, useRef, useState } from "react";
import { api } from "api";
import { useApiWithoutResponse } from "hooks/useApi";
import { badToast } from "utils/toasts";
import { Box } from "@chakra-ui/layout";
import { VStack, Flex, useToast } from "@chakra-ui/react";
import { UserIcon, LockIcon } from "components/basic/icons";
import { DefaultInput } from "components/basic/inputs";
import { InternalLink } from "components/basic/links";
import LoginButton from "./LoginButton";

const LoginForm: FC = () => {
  const toast = useToast();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [loading, login] = useApiWithoutResponse(api.account.login);

  const onLogin = async () => {
    if (!emailRef.current?.value) {
      setIsInvalidEmail(true);
      return;
    } else {
      setIsInvalidEmail(false);
    }

    if (!passwordRef.current?.value) {
      setIsInvalidPassword(true);
      return;
    } else {
      setIsInvalidPassword(false);
    }

    try {
      await login({
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });

      // magic
    } catch (err) {
      toast(badToast);
    }
  };

  return (
    <Box>
      <VStack mt="60px" spacing="34px">
        <DefaultInput
          ref={emailRef}
          w="345px"
          placeholder="Введите E-mail"
          leftElement={<UserIcon color="#696C74" />}
          {...(isInvalidEmail && {
            infoMessage: {
              message: "Заполните E-mail",
              status: "error",
            },
          })}
          isInvalid={isInvalidEmail}
        />
        <DefaultInput
          ref={passwordRef}
          w="345px"
          placeholder="Введите пароль"
          leftElement={<LockIcon color="#696C74" />}
          {...(isInvalidPassword && {
            infoMessage: {
              message: "Заполните пароль",
              status: "error",
            },
          })}
          isInvalid={isInvalidPassword}
        />
      </VStack>

      <Flex mt="26px" justify="flex-end">
        <InternalLink href="/registration" fontSize="p">
          Забыли пароль?
        </InternalLink>
      </Flex>

      <LoginButton mt="48px" onClick={onLogin} isLoading={loading} />
    </Box>
  );
};

export default LoginForm;
