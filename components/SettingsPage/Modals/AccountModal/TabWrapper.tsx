import React, { FC } from "react";
import { Flex, VStack, Center, ButtonProps } from "@chakra-ui/react";
import { FilledButton } from "components/basic/buttons";

interface Props {
  applyProps?: ButtonProps;
}

const TabWrapper: FC<Props> = ({ applyProps, children }) => {
  return (
    <Flex direction="column">
      <VStack flexGrow={1} justify="center" spacing="24px">
        {children}
      </VStack>

      <Center mt="40px">
        <FilledButton w="343px" {...applyProps}>
          Применить
        </FilledButton>
      </Center>
    </Flex>
  );
};

export default TabWrapper;
