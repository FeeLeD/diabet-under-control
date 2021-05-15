import React, { FC } from "react";
import { MeasurementDto } from "api/DTOs/Measurements";
import { Box, HStack, Text } from "@chakra-ui/layout";
import { FallIcon, RiseIcon, StableIcon } from "components/basic/icons";

interface Props {
  measurement: MeasurementDto;
  previosGlucoseValue?: number;
}

const MeasurementCard: FC<Props> = ({ measurement, previosGlucoseValue }) => {
  const {
    glucoseValue,
    breadValue,
    shortInsulinValue,
    longInsulinValue,
    type,
  } = measurement;

  const getIcon = () => {
    if (previosGlucoseValue && glucoseValue) {
      if (glucoseValue > previosGlucoseValue)
        return <RiseIcon color="#68B186" />;

      if (glucoseValue < previosGlucoseValue)
        return <FallIcon color="#68B186" />;

      if (glucoseValue === previosGlucoseValue)
        return <StableIcon color="#68B186" />;
    }
  };

  return (
    <Box
      pt="8px"
      pb="13px"
      px="15px"
      bg="neutral.40"
      borderRadius="8px"
      boxShadow="0px 4px 6px rgba(0,0,0,0.06)"
    >
      <HStack justify="space-between">
        <HStack>
          <Text
            fontWeight="bold"
            fontSize="h1"
            opacity={glucoseValue ? 1 : 0.5}
          >
            {glucoseValue ?? "_._"}
          </Text>

          {getIcon()}
        </HStack>

        <Text fontSize="p">
          {new Date().toTimeString().split(" ")[0].slice(0, 5)}
        </Text>
      </HStack>

      <HStack justify="space-between" fontSize="p">
        <Text>ммоль/л</Text>

        <Text>{type}</Text>
      </HStack>

      {(breadValue || shortInsulinValue || longInsulinValue) && (
        <>
          <Box w="100%" h="1px" bg="neutral.50" my="16px" />

          <HStack justify="space-between" fontSize="p">
            {breadValue && <Text>{breadValue} ХЕ</Text>}

            {(shortInsulinValue || longInsulinValue) && (
              <Text>
                {shortInsulinValue ? `${shortInsulinValue} ИКД` : ""}{" "}
                {longInsulinValue ? ` + ${longInsulinValue} ИПД` : ""}
              </Text>
            )}
          </HStack>
        </>
      )}
    </Box>
  );
};

export default MeasurementCard;
