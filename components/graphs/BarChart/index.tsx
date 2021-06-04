import React, { FC, useMemo } from "react";
import { chartGradients } from "utils/gradients";
import { Box, HStack, Text } from "@chakra-ui/react";
import VerticalBar from "./VerticalBar";
import Yaxis from "./Yaxis";

const MULTIPLIER = 10;

type Props = {
  values: number[];
  zones: number[];
  verticalBarColor?: string;
  zoneColors?: string[];
};

const BarChart: FC<Props> = ({
  values = [],
  zones = [],
  verticalBarColor = chartGradients.red,
  zoneColors = []
}) => {
  const numberOfSteps = useMemo(() => {
    let maxValue: number | undefined = undefined;
    values.forEach((value) => {
      if (!maxValue || value > maxValue) {
        maxValue = value;
      }
    });

    return maxValue ? maxValue * MULTIPLIER + MULTIPLIER : 0;
  }, [values]);

  const getColorFromZone = (value: number) => {
    if (zoneColors.length > 0 && zoneColors.length === zones.length + 1) {
      for (let i = 0; i < zones.length; i++) {
        if (value < zones[i]) {
          return zoneColors[i];
        }
      }
      return zoneColors[zones.length];
    }

    return verticalBarColor;
  };

  return (
    <Box position="relative" w="100%" h="100%">
      <Yaxis left="32px" />

      {zones.map((zone, i) => (
        <HStack
          key={i}
          position="absolute"
          bottom="0"
          w="100%"
          h={`calc(200% / ${numberOfSteps} * ${zone * MULTIPLIER})`}
          zIndex="-1"
        >
          <Text w="25px" textAlign="end" fontSize="p" color="ink.40">
            {zone}
          </Text>
          <Box
            flex={1}
            borderBottom="1px"
            borderStyle="dashed"
            borderColor="neutral.60"
          />
        </HStack>
      ))}

      <HStack
        position="relative"
        w="100%"
        h="100%"
        spacing="12px"
        justify="center"
      >
        {values.map((value, i) => (
          <VerticalBar
            key={i}
            value={value}
            h={`calc(100% / ${numberOfSteps} * ${value * MULTIPLIER})`}
            color={getColorFromZone(value)}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default BarChart;
