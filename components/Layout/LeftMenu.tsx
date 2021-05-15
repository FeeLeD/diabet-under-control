import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Flex, HStack, Box, Text } from "@chakra-ui/react";
import { WritingIcon, GraphIcon, EatIcon } from "components/basic/icons";
import LeftMenuItem from "components/Layout/LeftMenuItem";

const menu = [
  {
    icon: WritingIcon,
    title: "Записи",
    path: "/measurements",
  },
  {
    icon: GraphIcon,
    title: "Графики",
    path: "/graphs",
  },
  {
    icon: EatIcon,
    title: "Еда",
    path: "/food",
  },
];

const LeftMenu: FC = () => {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <Flex
      direction="column"
      position="fixed"
      left={0}
      w="420px"
      h="100vh"
      py="36px"
      borderRight="4px"
      borderColor="neutral.40"
    >
      <HStack spacing="14px" justify="center">
        <Box transform="rotate(90deg)">
          <Image width="64px" height="64px" src="/Logo.png" />
        </Box>

        <Text color="blue.60" fontSize="h1" fontWeight="bold">
          Диабет под контролем!
        </Text>
      </HStack>

      <Box mt="55px">
        {menu.map((item) => (
          <LeftMenuItem
            key={item.title}
            IconElement={item.icon}
            path={item.path}
            isActive={router.pathname.includes(item.path)}
          >
            {item.title}
          </LeftMenuItem>
        ))}
      </Box>

      <Flex flexGrow={1} align="flex-end">
        <Box>
          {/* <LeftMenuItem IconElement={WritingIcon}>Настройка</LeftMenuItem> */}
          {/* <LeftMenuItem IconElement={GraphIcon}>Выйти из аккаунта</LeftMenuItem> */}
        </Box>
      </Flex>
    </Flex>
  );
};

export default LeftMenu;
