import React, { FC, useState } from "react";
import { Box, HStack, StackProps, Text } from "@chakra-ui/layout";

interface Props extends StackProps {
  values: [string, string];
  onToggle?: (value: string) => void;
  isLeftValueChosen?: boolean;
}

const Toggle: FC<Props> = ({
  values,
  onToggle = () => {},
  isLeftValueChosen = true,
  ...props
}) => {
  const [isLeftChosen, setIsLeftChosen] = useState(isLeftValueChosen);

  const onChange = () => {
    setIsLeftChosen(!isLeftChosen);
    onToggle(!isLeftChosen ? values[0] : values[1]);
  };

  return (
    <HStack
      position="relative"
      w="100%"
      bg="rgba(118, 118, 128, 0.12)"
      h="32px"
      borderRadius="8px"
      px="2px"
      tabIndex={1}
      _hover={{ cursor: "pointer" }}
      onKeyPress={(e) => e.key === "Enter" && onChange()}
      onClick={onChange}
      {...props}
    >
      <Box
        w="50%"
        bg="white"
        h="28px"
        position="absolute"
        borderRadius="8px"
        boxShadow="0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)"
        transition="ease-in-out 0.2s"
        transform={`translateX(${isLeftChosen ? "0" : "calc(100% - 4px)"})`}
      />

      <Text userSelect="none" w="50%" textAlign="center" zIndex="1">
        {values[0]}
      </Text>
      <Text userSelect="none" w="50%" textAlign="center" zIndex="1">
        {values[1]}
      </Text>
    </HStack>
  );
};

export default Toggle;
