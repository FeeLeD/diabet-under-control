import React, { FC } from "react";
import { HStack, StackProps, Text } from "@chakra-ui/layout";
import { CircleAlertIcon } from "components/basic/icons/";

export type InfoMessageStatus = "success" | "warning" | "error" | "info";

interface Props extends StackProps {
  status?: InfoMessageStatus;
}

type InfoMessageColors = {
  bgColor: string;
  fontColor: string;
};

const InfoMessage: FC<Props> = ({ status = "info", children, ...props }) => {
  const { bgColor, fontColor } = React.useMemo<InfoMessageColors>(() => {
    switch (status) {
      case "success":
        return { bgColor: "green.30", fontColor: "#53A282" }; // green.70
      case "warning":
        return { bgColor: "yellow.30", fontColor: "#E9CA2F" }; // yellow.60
      case "success":
        return { bgColor: "red.30", fontColor: "#F53224" }; // red.60
      default:
        return { bgColor: "blue.30", fontColor: "#384EBC" }; // blue.70
    }
  }, []);

  return (
    <HStack
      px={1}
      w="fit-content"
      bg={bgColor}
      borderRadius="50px"
      color={fontColor}
      spacing="6px"
      {...props}
    >
      <CircleAlertIcon width={14} height={14} color={fontColor} />
      <Text fontSize="p">{children}</Text>
    </HStack>
  );
};

export default InfoMessage;
