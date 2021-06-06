import React, { FC } from "react";
import { HStack, useRadioGroup } from "@chakra-ui/react";
import RadioCard from "./RadioCard";

type Props = {
  options: string[];
  onChange: (option: string) => void;
};

const ChoosingPeriodPanel: FC<Props> = ({
  options = [],
  onChange = () => {}
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "period_of_statistics",
    defaultValue: "7 дней",
    onChange: onChange
  });

  const group = getRootProps();

  return (
    <HStack spacing="25px" {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export default ChoosingPeriodPanel;
