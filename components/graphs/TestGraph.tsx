import React, { FC } from "react";
import { useGlobalState } from "hooks/useGlobalState";
import { Box, BoxProps, Center, HStack, Text } from "@chakra-ui/layout";

const Graph: FC = () => {
  const { measurements } = useGlobalState();

  const levels = [3.3, 5.5, 10];
  const MAX_VALUE = 10;

  const numberOfSteps = MAX_VALUE * 10 + 10;

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      borderBottom="1px"
      borderColor="neutral.60"
    >
      {levels.map((level, i) => (
        <HStack
          key={i}
          position="absolute"
          bottom="0"
          w="100%"
          h={`calc(200% / ${numberOfSteps} * ${level * 10})`}
          zIndex="-1"
        >
          <Text w="25px" textAlign="center" fontSize="p" color="ink.40">
            {level}
          </Text>
          <Box
            flex={1}
            borderBottom="1px"
            borderStyle="dashed"
            borderColor="neutral.60"
          />
        </HStack>
      ))}

      <HStack w="100%" h="100%" spacing="12px" justify="center">
        {measurements
          .get()
          .map(
            (measurement, i) =>
              measurement.glucoseValue && (
                <Line
                  key={i}
                  value={measurement.glucoseValue}
                  h={`calc(100% / ${numberOfSteps} * ${
                    measurement.glucoseValue * 10
                  })`}
                />
              )
          )}
      </HStack>
    </Box>
  );
};

const Line: FC<BoxProps & { value: number }> = ({ value, ...props }) => {
  const COLORS = {
    blue: "linear-gradient(180deg, #ACC3EC 52.08%, rgba(183, 225, 196, 0) 100%)",
    green:
      "linear-gradient(180deg, #B7E1C4 52.08%, rgba(183, 225, 196, 0) 100%)",

    red: "linear-gradient(180deg, #FF9E99 52.08%, rgba(255, 158, 153, 0) 100%)"
  };

  const bg = React.useMemo(() => {
    if (value < 3.3) return COLORS.blue;
    else if (value > 5.5) return COLORS.red;
    else return COLORS.green;
  }, [value]);

  const circleBg = React.useMemo(() => {
    if (value < 3.3) return "blue.70";
    else if (value > 5.5) return "red.70";
    else return "green.70";
  }, [value]);

  return (
    <Box
      position="relative"
      w="16px"
      alignSelf="flex-end"
      bg={bg}
      borderRadius="8px 8px 0 0"
      {...props}
    >
      <Center mt="2px">
        <Text position="absolute" mb="36px" fontSize="14px" color={circleBg}>
          {value}
        </Text>
        <Box w="12px" h="12px" borderRadius="50%" bg={circleBg} />
      </Center>
    </Box>
  );
};

export default Graph;
