import React, { FC, useState } from "react";
import { useGlobalState } from "hooks/useGlobalState";
import { chartGradients } from "utils/gradients";
import { Box, SimpleGrid } from "@chakra-ui/react";
import MeasurementsBlock from "./MeasurementsBlock";
import BarChart from "components/graphs/BarChart";
import Layout from "components/Layout";
import DatePicker from "./DatePicker";

const MeasurementsPage: FC = () => {
  const [date, setDate] = useState(new Date());
  const { measurements } = useGlobalState();

  return (
    <Layout>
      <DatePicker onDateChange={(date) => setDate(date)} />

      <SimpleGrid mt="32px" columns={2} columnGap="32px">
        <MeasurementsBlock date={date} />

        <Box>
          <Box
            position="sticky"
            h="400px"
            top="16px"
            bg="neutral.40"
            borderRadius="8px"
            overflow="hidden"
            p={4}
          >
            <BarChart
              values={measurements
                .get()
                .reduce(
                  (arr, measurement) =>
                    measurement.glucoseValue
                      ? [...arr, measurement.glucoseValue]
                      : arr,
                  [] as number[]
                )}
              zones={[0, 3.3, 5.5]}
              zoneColors={[
                chartGradients.blue,
                chartGradients.blue,
                chartGradients.green,
                chartGradients.red
              ]}
            />
            {/* <Graph /> */}
          </Box>
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

export default MeasurementsPage;
