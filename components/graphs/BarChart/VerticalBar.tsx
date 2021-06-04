import React, { FC } from "react";
import { chartGradients } from "utils/gradients";
import { Box, BoxProps, Center, Text } from "@chakra-ui/react";

type Props = {
  value: number;
  color?: string;
} & BoxProps;

const VerticalBar: FC<Props> = ({
  value,
  color = chartGradients.red,
  ...props
}) => {
  const circleColor = React.useMemo(() => {
    if (color === chartGradients.blue) return "blue.70";
    else if (color === chartGradients.red) return "red.70";
    else return "green.70";
  }, [color]);

  return (
    <Box
      position="relative"
      w="16px"
      alignSelf="flex-end"
      bg={color}
      borderRadius="8px 8px 0 0"
      {...props}
    >
      <Center mt="2px">
        <Text position="absolute" mb="36px" fontSize="14px" color={circleColor}>
          {value}
        </Text>
        <Box w="12px" h="12px" borderRadius="50%" bg={circleColor} />
      </Center>
    </Box>
  );
};

export default VerticalBar;
