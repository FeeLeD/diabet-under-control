import React, { FC, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import MeasurementsBlock from "./MeasurementsBlock";
import Graph from "components/graphs/Graph";
import Layout from "components/Layout";
import DatePicker from "./DatePicker";

const MeasurementsPage: FC = () => {
  const [date, setDate] = useState(new Date());

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
            p={4}
            overflow="hidden"
          >
            <Graph />
          </Box>
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

export default MeasurementsPage;
