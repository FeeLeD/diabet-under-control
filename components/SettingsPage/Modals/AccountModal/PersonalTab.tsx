import React, { FC, useRef, useState } from "react";
import {
  Center,
  Box,
  Grid,
  InputRightElement,
  useToast
} from "@chakra-ui/react";
import { DefaultInput } from "components/basic/inputs";
import { Select } from "components/basic/selects";
import FormLabel from "components/basic/inputs/FormLabel";
import { Toggle } from "components/basic/toggles";
import TabWrapper from "./TabWrapper";
import { useApiWithoutResponse } from "hooks/useApi";
import { api } from "api";
import { useGlobalState } from "hooks/useGlobalState";
import { badToast, successToastCreator } from "utils/toasts";
import { ProfileUpdateDto } from "api/DTOs/Profile";

const PersonalTab: FC = () => {
  const toast = useToast();
  const { profile } = useGlobalState();
  const [diabetesType, setDiabetesType] = useState(profile.get()?.diabetesType);
  const [drugType, setDrugType] = useState(profile.get()?.drugType);
  const birthInputRef = useRef<HTMLInputElement>(null);
  const massInputRef = useRef<HTMLInputElement>(null);
  const [loading, updateProfile] = useApiWithoutResponse(
    api.profile.updateProfile
  );

  const onApply = async () => {
    try {
      const newProfile: ProfileUpdateDto = {
        diabetesType,
        drugType,
        birthDate: birthInputRef.current?.value,
        mass: massInputRef.current?.value
          ? parseFloat(massInputRef.current.value)
          : undefined
      };

      await updateProfile(newProfile);
      profile.set(
        (oldProfile) => oldProfile && { ...oldProfile, ...newProfile }
      );

      toast(successToastCreator("Персональные данные обновлены!"));
    } catch (err) {
      toast(badToast);
    }
  };

  return (
    <TabWrapper
      applyProps={{
        onClick: onApply,
        isLoading: loading
      }}
    >
      <Box>
        <FormLabel ml="22px" mb="4px">
          Тип лекарства
        </FormLabel>
        <Toggle
          w="343px"
          values={["Инсулин", "Таблетки"]}
          isLeftValueChosen={drugType && drugType === "insulin"}
          onToggle={(value) => {
            if (value === "Инсулин") setDrugType("insulin");
            else setDrugType("pills");
          }}
        />
      </Box>

      <Box>
        <FormLabel ml="22px">Тип диабета</FormLabel>
        <Select
          defaultMenuItem={
            diabetesType && (diabetesType === 1 ? "1 тип" : "2 тип")
          }
          menuItems={["1 тип", "2 тип"]}
          onItemChange={(type) => {
            if (type === "1 тип") setDiabetesType(1);
            else setDiabetesType(2);
          }}
          menuButtonProps={{
            w: "343px",
            h: "48px",
            borderRadius: "20px"
          }}
          menuListProps={{ w: "343px", zIndex: 10 }}
        />
      </Box>

      <Grid w="343px" gridTemplateColumns="auto 130px" gridGap={4}>
        <DefaultInput
          ref={birthInputRef}
          defaultValue={
            profile &&
            profile.get()?.birthDate &&
            new Date(profile.get()?.birthDate as string)
              .toISOString()
              .slice(0, 10)
          }
          type="date"
          label="Дата рождения"
        />
        <DefaultInput
          ref={massInputRef}
          type="number"
          label="Масса"
          defaultValue={profile.get()?.mass}
          rightElement={
            <InputRightElement>
              <Center pt="8px" opacity={0.5}>
                кг
              </Center>
            </InputRightElement>
          }
        />
      </Grid>
    </TabWrapper>
  );
};

export default PersonalTab;
