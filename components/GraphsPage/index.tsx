import React, { FC, useState } from "react";
import {
  WEEK_DATA,
  TWO_WEEKS_DATA,
  MONTH_DATA
} from "components/graphs/TestData";
import Layout from "components/Layout";
import { Center, HStack, Stack, Text } from "@chakra-ui/layout";
import { DefaultInput } from "components/basic/inputs";
import LineChart from "components/graphs/LineChart";
import ChoosingPeriodPanel from "./ChoosingPeriodPanel";
import BarChart from "components/graphs/BarChart";

type PERIOD = "7 дней" | "14 дней" | "30 дней";
const PERIODS: PERIOD[] = ["7 дней", "14 дней", "30 дней"];

const GraphsPage: FC = () => {
  const [data, setData] = useState(WEEK_DATA);
  const onChange = (option: string) => {
    if ((option as PERIOD) === "7 дней") setData(WEEK_DATA);
    if ((option as PERIOD) === "14 дней") setData(TWO_WEEKS_DATA);
    if ((option as PERIOD) === "30 дней") setData(MONTH_DATA);
  };

  return (
    <Layout>
      <HStack mt="70px" w="100%" justify="space-between">
        <ChoosingPeriodPanel options={PERIODS} onChange={onChange} />

        <HStack>
          <Text>С</Text>
          <DefaultInput w="125px" opacity="0.8" />
          <Text>По</Text>
          <DefaultInput w="125px" opacity="0.8" />
        </HStack>
      </HStack>

      <Stack mt="32px" borderRadius="8px" bg="neutral.40">
        <Text mt="12px" textAlign="center">
          Динамика уровня содержания глюкозы в крови
        </Text>
        <Center w="100%" h="440px">
          <LineChart data={data} />
        </Center>
      </Stack>

      <Stack mt="32px" borderRadius="8px" bg="neutral.40">
        <Text mt="12px" mb="18px" textAlign="center">
          Потребление углеводов
        </Text>
        <Center w="100%" h="440px">
          <BarChart
            values={[120, 140, 156, 123, 144, 170, 132]}
            zones={[0, 50, 100, 150]}
          />
        </Center>
      </Stack>
    </Layout>
  );
};

export default GraphsPage;
