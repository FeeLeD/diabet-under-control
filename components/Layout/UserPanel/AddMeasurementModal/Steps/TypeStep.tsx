import React, { FC } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { Select } from "components/basic/selects";

interface Props {
  setType: (type: string) => void;
}

const TypeStep: FC<Props> = ({ setType }) => {
  return (
    <Box w="100%">
      <Text fontSize="h2">Тип измерения</Text>

      <Center mt="50px">
        <Select
          menuItems={[
            "Пробуждение",
            "До завтрака",
            "После завтрака",
            "До тренировки",
            "Во время тренировки",
            "После тренировки",
            "До обеда",
            "После обеда",
            "До ужина",
            "После ужина",
          ]}
          menuButtonText="Выберите тип измерения"
          menuButtonProps={{
            w: "400px",
          }}
          menuListProps={{
            w: "400px",
            maxH: "200px",
            overflow: "auto",
          }}
          onItemChange={(type) => setType(type)}
        />
      </Center>
    </Box>
  );
};

export default TypeStep;
