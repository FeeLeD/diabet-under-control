import React, { FC, useEffect } from "react";
import { api } from "api";
import { useApiWithoutResponse } from "hooks/useApi";
import { useGlobalState } from "hooks/useGlobalState";
import { Box, HStack, Spinner, Stack, Text } from "@chakra-ui/react";
import MeasurementCard from "./MeasurementCard";
import StatsBlock from "./StatsBlock";

interface Props {
  date: Date;
}

const MeasurementsBlock: FC<Props> = ({ date }) => {
  const { measurements } = useGlobalState();
  const [loading, getMeasurements] = useApiWithoutResponse(
    api.measurements.getMeasurements
  );

  useEffect(() => {
    loadMeasurements();
  }, [date]);

  const loadMeasurements = async () => {
    const newMeasurements = await getMeasurements("");

    if (newMeasurements) {
      measurements.set(newMeasurements);
    }
  };

  return (
    <Box>
      <StatsBlock measurements={measurements.get()} />

      <Stack spacing="24px">
        {loading ? (
          <HStack opacity="0.7" justify="center">
            <Spinner thickness="3px" color="blue.50" />
            <Text>Загрузка...</Text>
          </HStack>
        ) : measurements.get().length > 0 ? (
          measurements
            .get()
            .map((measurement, i) => (
              <MeasurementCard
                key={measurement.id}
                measurement={measurement}
                previosGlucoseValue={
                  i > 0 ? measurements.get()[i - 1].glucoseValue : undefined
                }
              />
            ))
        ) : (
          <Text textAlign="center">Данные отсутствуют</Text>
        )}
      </Stack>
    </Box>
  );
};

export default MeasurementsBlock;
