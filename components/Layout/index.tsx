import React, { FC } from "react";
import { useUserAuthorizated } from "hooks/useUserAuthorizated";
import { Box, Grid, Center, HStack, Spinner, Text } from "@chakra-ui/react";
import LeftMenu from "components/Layout/LeftMenu";
import LoginPage from "components/LoginPage";
import UserPanel from "./UserPanel/";

const Layout: FC = ({ children }) => {
  const { isAuthorizated, loading, error } = useUserAuthorizated();

  if (isAuthorizated) {
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

  if (loading) {
    return (
      <Center h="100vh">
        <HStack spacing={4}>
          <Spinner thickness="4px" size="xl" color="blue.50" />
          <Text fontSize="h1">Загрузка...</Text>
        </HStack>
      </Center>
    );
  }

  return null;
};

export default Layout;
