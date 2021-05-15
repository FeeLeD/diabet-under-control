import React, { FC, useEffect } from "react";
import { api } from "api";
import { useApi } from "hooks/useApi";
import { Box, HStack, Spinner, Stack, Text } from "@chakra-ui/react";
import MeasurementCard from "./MeasurementCard";
import StatsBlock from "./StatsBlock";

interface Props {
  date: Date;
}

const MeasurementsBlock: FC<Props> = ({ date }) => {
  const [measurements, loading, getMeasurements] = useApi(
    api.measurements.getMeasurements
  );

  useEffect(() => {
    getMeasurements("");
  }, [date]);

  return (
    <Box>
      <StatsBlock measurements={measurements} />

      <Stack spacing="24px">
        {loading ? (
          <HStack opacity="0.7" justify="center">
            <Spinner thickness="3px" color="blue.50" />
            <Text>Загрузка...</Text>
          </HStack>
        ) : (
          measurements &&
          (measurements.length > 0 ? (
            measurements.map((measurement, i) => (
              <MeasurementCard
                key={measurement.id}
                measurement={measurement}
                previosGlucoseValue={
                  i > 0 ? measurements[i - 1].glucoseValue : undefined
                }
              />
            ))
          ) : (
            <Text textAlign="center">Данные отсутствуют</Text>
          ))
        )}
      </Stack>
    </Box>
  );
};

export default MeasurementsBlock;
