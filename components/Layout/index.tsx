import React, { FC } from "react";
import { Box, Grid, Center } from "@chakra-ui/react";
import LeftMenu from "components/Layout/LeftMenu";
import UserPanel from "./UserPanel/";

const Layout: FC = ({ children }) => {
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
};

export default Layout;
