import React, { FC, useState } from "react";
import { HStack, Center, Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "components/basic/icons";

interface Props {
  onDateChange?: (date: Date) => void;
}

const DatePicker: FC<Props> = ({ onDateChange = () => {} }) => {
  const [date, setDate] = useState(new Date());

  const onChangeDate = (direction: "next" | "previos") => {
    const increment = direction === "next" ? 1 : -1;
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + increment);
    setDate(newDate);
    onDateChange(newDate);
  };

  const getMonth = () => {
    switch (date.getMonth()) {
      case 0:
        return "Янв";
      case 1:
        return "Фев";
      case 2:
        return "Мар";
      case 3:
        return "Апр";
      case 4:
        return "Май";
      case 5:
        return "Июн";
      case 6:
        return "Июл";
      case 7:
        return "Авг";
      case 8:
        return "Сен";
      case 9:
        return "Окт";
      case 10:
        return "Ноя";
      case 11:
        return "Дек";
      default:
        return "";
    }
  };

  return (
    <HStack w="100%" mt="67px" spacing="18px">
      <Box
        tabIndex={1}
        _hover={{ cursor: "pointer", opacity: 0.5 }}
        onClick={() => onChangeDate("previos")}
      >
        <ChevronLeftIcon />
      </Box>

      <Center
        userSelect="none"
        flexGrow={1}
        bg="neutral.40"
        h="34px"
        borderRadius="8px"
      >
        {date.getDate()}, {getMonth()}
      </Center>

      <Box
        tabIndex={1}
        _hover={{ cursor: "pointer", opacity: 0.5 }}
        onClick={() => onChangeDate("next")}
      >
        <ChevronRightIcon />
      </Box>
    </HStack>
  );
};

export default DatePicker;
