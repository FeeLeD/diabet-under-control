import React, { FC } from "react";
import { MeasurementCreateDto } from "api/DTOs/Measurements";
import { Box, Grid, Text } from "@chakra-ui/layout";

interface Props {
  measurement: MeasurementCreateDto;
}

const OverallStep: FC<Props> = ({ measurement }) => {
  const {
    glucoseValue,
    breadValue,
    shortInsulinValue,
    longInsulinValue,
    type,
  } = measurement;

  return (
    <Box w="100%">
      <Text fontSize="h2">Проверка данных</Text>

      <Grid mt="50px" gridTemplateColumns="280px auto" gridRowGap={4}>
        <Text>Тип измерения</Text>
        <Text>{type || "Не указан"}</Text>

        <Text>Уровень глюкозы</Text>
        <Text>{glucoseValue ? `${glucoseValue}  ммоль/л` : "Не указан"}</Text>

        <Text>Потребление углеводов</Text>
        <Text>{breadValue ? `${breadValue} ХЕ` : "Не указан"}</Text>

        <Text>Короткий инсулин</Text>
        <Text>
          {shortInsulinValue ? `${shortInsulinValue} ед.` : "Не указан"}
        </Text>

        <Text>Длинный инсулин</Text>
        <Text>
          {longInsulinValue ? `${longInsulinValue} ед.` : "Не указан"}
        </Text>
      </Grid>
    </Box>
  );
};

export default OverallStep;
