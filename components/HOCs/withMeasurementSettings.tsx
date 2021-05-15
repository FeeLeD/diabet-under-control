import React, { useRef, useState } from "react";
import { MeasurementCreateDto } from "api/DTOs/Measurements";

export interface WithMeasurementSettings {
  glucoseValueRef: React.RefObject<HTMLInputElement>;
  breadValueRef: React.RefObject<HTMLInputElement>;
  shortInsulinValueRef: React.RefObject<HTMLInputElement>;
  longInsulinValueRef: React.RefObject<HTMLInputElement>;
  setType: (type: string) => void;
  getAllValues: () => MeasurementCreateDto;
  areAllNumbericValuesEmpty: () => boolean;
}

const withMeasurementSettings = <T extends WithMeasurementSettings>(
  Component: React.ComponentType<T>
) => {
  const Wrapper = (props: Omit<T, keyof WithMeasurementSettings>) => {
    const glucoseValueRef = useRef<HTMLInputElement>(null);
    const breadValueRef = useRef<HTMLInputElement>(null);
    const shortInsulinValueRef = useRef<HTMLInputElement>(null);
    const longInsulinValueRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState("");

    const getAllValues = () => {
      const measurement: MeasurementCreateDto = {
        glucoseValue:
          glucoseValueRef.current && glucoseValueRef.current.value
            ? parseFloat(glucoseValueRef.current.value)
            : undefined,
        breadValue:
          breadValueRef.current && breadValueRef.current.value
            ? parseFloat(breadValueRef.current.value)
            : undefined,
        shortInsulinValue:
          shortInsulinValueRef.current && shortInsulinValueRef.current.value
            ? parseFloat(shortInsulinValueRef.current.value)
            : undefined,
        longInsulinValue:
          longInsulinValueRef.current && longInsulinValueRef.current.value
            ? parseFloat(longInsulinValueRef.current.value)
            : undefined,
        type,
      };

      return measurement;
    };

    const areAllNumbericValuesEmpty = () => {
      const { glucoseValue, breadValue, shortInsulinValue, longInsulinValue } =
        getAllValues();

      return (
        !glucoseValue && !breadValue && !shortInsulinValue && !longInsulinValue
      );
    };

    return (
      <Component
        {...(props as T)}
        glucoseValueRef={glucoseValueRef}
        breadValueRef={breadValueRef}
        shortInsulinValueRef={shortInsulinValueRef}
        longInsulinValueRef={longInsulinValueRef}
        setType={setType}
        getAllValues={getAllValues}
        areAllNumbericValuesEmpty={areAllNumbericValuesEmpty}
      />
    );
  };

  return Wrapper;
};

export default withMeasurementSettings;
