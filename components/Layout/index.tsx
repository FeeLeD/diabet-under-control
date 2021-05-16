import React, { FC } from "react";
import { useUser } from "hooks/useUser";
import { Box, Grid, Center, HStack, Spinner, Text } from "@chakra-ui/react";
import LeftMenu from "components/Layout/LeftMenu";
import LoginPage from "components/LoginPage";
import UserPanel from "./UserPanel/";

const Layout: FC = ({ children }) => {
  const { user, error } = useUser();

  if (user) {
    return (
      <>
        <LeftMenu />

        <Grid gridTemplateColumns="420px auto" gridGap="32px">
          <Box />

          <Center py="44px">
            <Box w="800px">
              <UserPanel />

              {children}
            </Box>
          </Center>
        </Grid>
      </>
    );
  }

  if (error) {
    return <LoginPage />;
  }

  return (
    <Center h="100vh">
      <HStack spacing={4}>
        <Spinner thickness="4px" size="xl" color="blue.50" />
        <Text fontSize="h1">Загрузка...</Text>
      </HStack>
    </Center>
  );
};

export default Layout;
