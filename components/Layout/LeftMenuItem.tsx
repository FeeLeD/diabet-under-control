import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { IconProps } from "interfaces/icons";
import { HStack, StackProps, Text } from "@chakra-ui/react";

interface Props {
  isActive?: boolean;
  IconElement: React.FC<IconProps>;
  path: string;
}

const ICON_COLOR = "#424449";

const LeftMenuItem: FC<Props> = ({ isActive, IconElement, path, children }) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(path);
  }, []);

  const activeStyles: StackProps = {
    bg: "linear-gradient(90deg, #C2CFF0 -14.81%, rgba(255, 255, 255, 0) 100%)",
    borderRight: "4px",
    borderColor: "blue.30",
  };

  return (
    <HStack
      h="88px"
      px="32px"
      spacing="40px"
      color="ink.50"
      tabIndex={1}
      opacity={isActive ? 1 : 0.6}
      _hover={{ cursor: "pointer", opacity: 1 }}
      onClick={() => router.push(path)}
      onKeyPress={(e) => e.key === "Enter" && router.push(path)}
      {...(isActive && activeStyles)}
    >
      <IconElement color={ICON_COLOR} />
      <Text>{children}</Text>
    </HStack>
  );
};

export default LeftMenuItem;
