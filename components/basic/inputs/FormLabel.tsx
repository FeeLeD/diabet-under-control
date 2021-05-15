import React, { FC } from "react";
import { HStack, StackProps, Text } from "@chakra-ui/layout";

interface Props extends StackProps {
  isRequired?: boolean;
}

const FormLabel: FC<Props> = ({ isRequired, children, ...props }) => {
  return (
    <HStack spacing={0} {...props}>
      <Text>{children}</Text>;{isRequired && <Text color="red.60">*</Text>}
    </HStack>
  );
};

export default FormLabel;
