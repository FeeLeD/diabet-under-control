import React, { FC } from "react";
import { HStack, Text, useDisclosure } from "@chakra-ui/react";
import { FilledButton } from "components/basic/buttons";
import { PlusIcon } from "components/basic/icons";
import AddMeasurementModal from "./AddMeasurementModal";

const UserPanel: FC = () => {
  const {
    isOpen: isModalOpened,
    onClose: closeModal,
    onOpen: openModal,
  } = useDisclosure();

  const measurementModal = (
    <AddMeasurementModal isOpen={isModalOpened} onClose={closeModal} />
  );

  return (
    <HStack w="100%" justify="space-between" fontSize="h1" fontWeight="bold">
      <Text>Привет, Данила</Text>

      <HStack spacing="16px">
        <Text color="blue.50">Добавить запись</Text>

        <FilledButton
          borderRadius="12px"
          w="48px"
          h="48px"
          px={0}
          onClick={openModal}
        >
          <PlusIcon width={20} height={20} color="#fff" />
        </FilledButton>
      </HStack>

      {measurementModal}
    </HStack>
  );
};

export default UserPanel;
