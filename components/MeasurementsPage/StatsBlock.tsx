import React, { FC, useEffect, useState } from "react";
import { MeasurementDto } from "api/DTOs/Measurements";
import { HStack } from "@chakra-ui/react";
import StatCard from "components/MeasurementsPage/StatCard";

interface Props {
  measurements?: MeasurementDto[];
}

interface Stats {
  avgValue?: number;
  maxValue?: number;
  minValue?: number;
}

const StatsBlock: FC<Props> = ({ measurements }) => {
  const [stats, setStats] = useState<Stats>();

  useEffect(() => {
    if (measurements && measurements.length > 0) {
      setStats(calculateStatsFrom(measurements));
    }
  }, [measurements]);

  const calculateStatsFrom = (measurements: MeasurementDto[]): Stats => {
    let avgValue = 0;
    let minValue = 100;
    let maxValue = -1;
    let sum = 0;

    measurements.forEach((measurement) => {
      if (measurement.glucoseValue) {
        if (measurement.glucoseValue > maxValue) {
          maxValue = measurement.glucoseValue;
        }

        if (measurement.glucoseValue < minValue) {
          minValue = measurement.glucoseValue;
        }

        avgValue += measurement.glucoseValue;
        sum += 1;
      }
    });
    avgValue = parseFloat(Number(avgValue / sum).toFixed(2));

    return {
      avgValue: avgValue > 0 ? avgValue : undefined,
      minValue: minValue < 100 ? minValue : undefined,
      maxValue: maxValue > 0 ? maxValue : undefined,
    };
  };

  if (stats?.avgValue || stats?.maxValue || stats?.minValue) {
    return (
      <HStack
        w="100%"
        mb="32px"
        justify={
          stats.maxValue && stats.minValue ? "space-between" : "flex-start"
        }
      >
        {stats.avgValue && <StatCard status="Средний" value={stats.avgValue} />}
        {stats.maxValue && <StatCard status="Высокий" value={stats.maxValue} />}
        {stats.minValue && <StatCard status="Низкий" value={stats.minValue} />}
      </HStack>
    );
  }

  return null;
};

export default StatsBlock;
