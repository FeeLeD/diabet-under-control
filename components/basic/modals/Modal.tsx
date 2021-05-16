import React, { FC } from "react";
import {
  ButtonProps,
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FilledButton } from "components/basic/buttons";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
  modalTitle?: string;
  showApplyButton?: boolean;
  applyButtonText?: string;
  applyButtonProps?: ButtonProps;
}

const Modal: FC<Props> = ({
  isOpen,
  onClose,
  width = "700px",
  height,
  modalTitle,
  showApplyButton = true,
  applyButtonText = "Применить",
  applyButtonProps,
  children,
}) => {
  return (
    <ChakraModal size="full" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent w={width} h={height} minH="fit-content" p="42px">
        {modalTitle && (
          <Text fontSize="h1" mb="16px">
            {modalTitle}
          </Text>
        )}

        {children}

        {showApplyButton && (
          <FilledButton mt="16px" {...applyButtonProps}>
            {applyButtonText}
          </FilledButton>
        )}
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
