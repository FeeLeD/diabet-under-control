import React, { FC } from "react";
import { Text, VStack } from "@chakra-ui/react";

interface Props {
  status: "Средний" | "Высокий" | "Низкий";
  value: number;
}

const COLORS = {
  purple: "linear-gradient(134.51deg, #7745AF -23.9%, #8973D3 118.18%)",
  blue: "linear-gradient(65.88deg, #6A9ADD 0%, #4E7ACA 100%)",
  green: "linear-gradient(65.88deg, #53A282 0.01%, #68B186 100%)",
  orange: "linear-gradient(135deg, #F56224 -17.26%, #F58824 118.19%)",
  red: "linear-gradient(65.88deg, #F53224 0%, #E8630C 100%)",
};

const StatCard: FC<Props> = ({ status, value }) => {
  const bg = React.useMemo(() => {
    if (value < 2.1) return COLORS.purple;
    else if (value < 4) return COLORS.blue;
    else if (value < 7.3) return COLORS.green;
    else if (value < 10.1) return COLORS.orange;
    else return COLORS.red;
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
