import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { api } from "api";
import { badToast } from "utils/toasts";
import { useToast } from "@chakra-ui/toast";
import { Center, HStack, Spinner, Text } from "@chakra-ui/react";

const LogoutPage: FC = () => {
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    logoutUser();
  }, []);

  const logoutUser = async () => {
    try {
      await api.account.logout();
      router.push("/");
    } catch (err) {
      toast(badToast);
    }
  };

  return (
    <Center h="100vh">
      <HStack spacing={4}>
        <Spinner thickness="4px" size="xl" color="blue.50" />
        <Text fontSize="h1">Загрузка...</Text>
      </HStack>
    </Center>
  );
};

export default LogoutPage;
