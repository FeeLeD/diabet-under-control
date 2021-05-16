import React, { FC } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ProfileDataBlock from "./ProfileDataBlock";
import SettingsBlock from "./SettingsBlock";
import Layout from "components/Layout";

const SettingsPage: FC = () => {
  return (
    <Layout>
      <SimpleGrid mt="32px" columns={2} columnGap="32px">
        <SettingsBlock />

        <ProfileDataBlock />
      </SimpleGrid>
    </Layout>
  );
};

export default SettingsPage;
