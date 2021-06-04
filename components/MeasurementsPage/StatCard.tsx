import React, { FC } from "react";
import { gradients } from "utils/gradients";
import { Text, VStack } from "@chakra-ui/react";

interface Props {
  status: "Средний" | "Высокий" | "Низкий";
  value: number;
}

const StatCard: FC<Props> = ({ status, value }) => {
  const bg = React.useMemo(() => {
    if (value < 2.1) return gradients.purple;
    else if (value < 4) return gradients.blue;
    else if (value < 7.3) return gradients.green;
    else if (value < 10.1) return gradients.orange;
    else return gradients.red;
  }, [value]);

  return (
    <VStack
      w="120px"
      bg={bg}
      borderRadius="8px"
      fontSize="p"
      color="white"
      py="8px"
      spacing="4px"
    >
      <Text userSelect="none">{status}</Text>
      <Text fontSize="h1" fontWeight="bold">
        {value}
      </Text>
      <Text userSelect="none">ммоль/л</Text>
    </VStack>
  );
};

export default StatCard;
