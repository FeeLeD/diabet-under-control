import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/input";
import { Box, Center } from "@chakra-ui/layout";
import InfoMessage, {
  InfoMessageStatus,
} from "components/basic/inputs/InfoMessage";
import FormLabel from "components/basic/inputs/FormLabel";

const DISABLED_OPACITY = 0.6;

interface Props extends InputProps {
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
  label?: string;
  infoMessage?: {
    message: string;
    status?: InfoMessageStatus;
  };
}

const DefaultInput = React.forwardRef(
  (
    {
      leftElement,
      rightElement,
      label,
      isDisabled,
      infoMessage,
      ...props
    }: Props,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <Box position="relative" w="fit-content">
        {label && (
          <FormLabel
            ml="22px"
            isRequired={true}
            opacity={isDisabled ? DISABLED_OPACITY : 1}
          >
            {label}
          </FormLabel>
        )}

        <InputGroup
          w="fit-content"
          position="relative"
          opacity={isDisabled ? DISABLED_OPACITY : 1}
        >
          {leftElement && (
            <InputLeftElement
              ml="12px"
              pointerEvents="none"
              children={
                <Center mt={2} h="48px">
                  {leftElement}
                </Center>
              }
            />
          )}

          <Input
            ref={ref}
            w='100%'
            height="48px"
            bg="neutral.50"
            border="none"
            borderRadius="20px"
            color="ink.50"
            pl={leftElement ? "54px" : "22px"}
            pr={rightElement ? "46px" : "22px"}
            isDisabled={isDisabled}
            _focus={{
              boxShadow: "0 0 0 2px #384EBC",
            }}
            _disabled={{
              opacity: DISABLED_OPACITY,
            }}
            _invalid={{
              bg: "red.30",
              boxShadow: "0 0 0 2px #FF4747",
            }}
            {...props}
          />

          {rightElement && (
            <InputRightElement
              mr="12px"
              children={
                <Center mt={2} h="48px">
                  {rightElement}
                </Center>
              }
            />
          )}
        </InputGroup>

        {infoMessage && (
          <InfoMessage
            w="100%"
            mt="4px"
            position="absolute"
            opacity={0.8}
            status={infoMessage.status}
          >
            {infoMessage.message}
          </InfoMessage>
        )}
      </Box>
    );
  }
);

export default DefaultInput;
