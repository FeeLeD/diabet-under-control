import React, { FC, useState } from "react";
import { api } from "api";
import { useApiWithoutResponse } from "hooks/useApi";
import { badToast, successToastCreator, warnToastCreator } from "utils/toasts";
import { Modal, ModalOverlay, ModalContent, useToast } from "@chakra-ui/react";
import { Box, HStack, Grid } from "@chakra-ui/layout";
import { ChevronLeftIcon } from "components/basic/icons";
import { FilledButton } from "components/basic/buttons";
import StepsContainer from "./Components/StepsContainer";
import GlucoseValueStep from "./Steps/GlucoseValueStep";
import BreadValueStep from "./Steps/BreadValueStep";
import ProgressBar from "./Components/ProgressBar";
import OverallStep from "./Steps/OverallStep";
import InsulinStep from "./Steps/InsulinStep";
import TypeStep from "./Steps/TypeStep";
import withMeasurementSettings, {
  WithMeasurementSettings,
} from "components/HOCs/withMeasurementSettings";

interface Props extends WithMeasurementSettings {
  isOpen: boolean;
  onClose: () => void;
}

const NUMBER_OF_STEPS = 5;

const AddMeasurementModal: FC<Props> = ({
  isOpen,
  onClose,
  glucoseValueRef,
  breadValueRef,
  shortInsulinValueRef,
  longInsulinValueRef,
  setType,
  getAllValues,
  areAllNumbericValuesEmpty,
}) => {
  const toast = useToast();
  const [stepNumber, setStepNumber] = useState(0);
  const isLastStep = stepNumber === NUMBER_OF_STEPS - 1;
  const switchToNextStep = () => setStepNumber(stepNumber + 1);
  const switchToPreviousStep = () => setStepNumber(stepNumber - 1);
  const [loading, createMeasurement] = useApiWithoutResponse(
    api.measurements.createMeasurement
  );

  const onAddMeasurement = async () => {
    try {
      if (areAllNumbericValuesEmpty()) {
        toast(warnToastCreator("Пожалуйста, заполните данные"));
        return;
      }

      // GET SITE ID
      await createMeasurement({ siteId: 0, ...getAllValues() });

      setStepNumber(0);
      toast(successToastCreator("Запись добавлена!"));
      onClose();
    } catch (err) {
      toast(badToast);
    }
  };

  return (
    <Modal size="full" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent w="700px" minH="fit-content" p="42px">
        <HStack spacing="25px">
          <Box
            tabIndex={1}
            onClick={stepNumber === 0 ? onClose : switchToPreviousStep}
          >
            <ChevronLeftIcon />
          </Box>

          <ProgressBar
            flexGrow={1}
            numberOfSteps={NUMBER_OF_STEPS}
            currentStepNumber={stepNumber}
          />
        </HStack>

        <Grid mt="50px" gridTemplateRows="350px 50px">
          <StepsContainer
            numberOfSteps={NUMBER_OF_STEPS}
            currentStepNumber={stepNumber}
          >
            <GlucoseValueStep inputRef={glucoseValueRef} />
            <BreadValueStep inputRef={breadValueRef} />
            <InsulinStep
              shortInputRef={shortInsulinValueRef}
              longInputRef={longInsulinValueRef}
            />
            <TypeStep setType={setType} />
            <OverallStep measurement={getAllValues()} />
          </StepsContainer>

          <FilledButton
            isLoading={loading}
            onClick={isLastStep ? onAddMeasurement : switchToNextStep}
          >
            {isLastStep ? "Готово" : "Далее"}
          </FilledButton>
        </Grid>
      </ModalContent>
    </Modal>
  );
};

export default withMeasurementSettings(AddMeasurementModal);
