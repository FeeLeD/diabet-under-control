import React, { FC, useState } from "react";
import { Modal } from "components/basic/modals";
import { Grid, HStack, Stack, Text } from "@chakra-ui/layout";
import { DefaultInput } from "components/basic/inputs";
import { Box } from "@chakra-ui/react";
import { ChevronRightIcon } from "components/basic/icons";
import GeneralTab from "./GeneralTab";
import PersonalTab from "./PersonalTab";
import SecurityTab from "./SecurityTab";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AccountModal: FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);

  const TABS = ["Основные", "Персональные данные", "Безопасность"];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      width="900px"
      height="600px"
      modalTitle="Настройки аккаунта"
      showApplyButton={false}
    >
      <Grid h="100%" mt="28px" gridTemplateColumns="250px auto" gridGap="24px">
        <Box borderRight="4px" borderColor="neutral.40">
          <Stack py="12px" spacing="24px">
            {TABS.map((tab, i) => (
              <HStack
                key={i}
                tabIndex={1}
                pr="8px"
                justify="space-between"
                opacity={i === activeTab ? 1 : 0.4}
                _hover={{ cursor: "pointer", opacity: 0.8 }}
                onClick={() => setActiveTab(i)}
                onKeyPress={(e) => e.key === "Enter" && setActiveTab(i)}
              >
                <Text>{tab}</Text>
                <ChevronRightIcon />
              </HStack>
            ))}
          </Stack>
        </Box>

        {activeTab === 0 && <GeneralTab />}
        {activeTab === 1 && <PersonalTab />}
        {activeTab === 2 && <SecurityTab />}
      </Grid>
    </Modal>
  );
};

export default AccountModal;
