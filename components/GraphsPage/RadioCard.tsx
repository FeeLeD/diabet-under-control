import React, { FC } from "react";
import { Box, RadioProps, useRadio } from "@chakra-ui/react";

const RadioCard: FC<RadioProps> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        bg="neutral.40"
        py="8px"
        px="24px"
        borderRadius="8px"
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.06)"
        color="ink.60"
        fontWeight="regular"
        fontSize="p"
        _hover={{ cursor: "pointer", opacity: 0.6 }}
        _active={{ opacity: 0.4 }}
        _focus={{
          boxShadow: "0 0 0 3px #ACC3EC"
        }}
        _checked={{
          bg: "blue.50",
          color: "white"
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
