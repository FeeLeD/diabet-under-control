import React, { FC } from "react";
import { ButtonProps } from "@chakra-ui/button";
import { EmptyButton } from "components/basic/buttons";
import { Box, Center, Grid, HStack, Text } from "@chakra-ui/layout";
import { CalendarIcon, ChevronRightIcon } from "components/basic/icons";

interface Props extends ButtonProps {
  title: string;
  description: string;
}

const SettingsMenuItem: FC<Props> = ({ title, description, ...props }) => {
  return (
    <EmptyButton h="52px" bg="neutral.50" fontWeight="regular" {...props}>
      <Grid w="100%" gridTemplateColumns="24px auto 24px" gridGap="10px">
        <Center>
          <CalendarIcon />
        </Center>

        <Box justifySelf="flex-start" textAlign="start">
          <Text>{title}</Text>
          <Text fontSize="10px">{description}</Text>
        </Box>

        <Center>
          <ChevronRightIcon />
        </Center>
      </Grid>
    </EmptyButton>
  );
};

export default SettingsMenuItem;
