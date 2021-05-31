import React, { useState } from "react";
import { useGlobalState } from "hooks/useGlobalState";
import { api } from "api";
import { useApiWithoutResponse } from "hooks/useApi";
import { badToast, successToastCreator } from "utils/toasts";
import { useToast } from "@chakra-ui/react";
import { DefaultInput } from "components/basic/inputs";
import TabWrapper from "./TabWrapper";

const GeneralTab = () => {
  const toast = useToast();
  const { user } = useGlobalState();
  const [firstName, setFirstName] = useState(user.get()?.firstName ?? "");
  const [lastName, setLastName] = useState(user.get()?.lastName ?? "");
  const [otherName, setOtherName] = useState(user.get()?.otherName ?? "");
  const [loading, updateUser] = useApiWithoutResponse(api.account.updateUser);

  const onApply = async () => {
    try {
      await updateUser({ firstName, lastName, otherName });
      user.set(
        (oldUser) =>
          oldUser && {
            ...oldUser,
            firstName,
            lastName,
            otherName
          }
      );

      toast(successToastCreator("Данные обновлены!"));
    } catch (err) {
      toast(badToast);
    }
  };

  return (
    <TabWrapper
      applyProps={{
        onClick: onApply,
        isLoading: loading,
        isDisabled: !firstName || !lastName
      }}
    >
      <DefaultInput
        w="343px"
        label="Фамилия"
        value={lastName}
        onChange={(e) => setLastName(e.currentTarget.value)}
        isRequired={true}
      />
      <DefaultInput
        w="343px"
        label="Имя"
        value={firstName}
        onChange={(e) => setFirstName(e.currentTarget.value)}
        isRequired={true}
      />
      <DefaultInput
        w="343px"
        label="Отчество"
        value={otherName}
        onChange={(e) => setOtherName(e.currentTarget.value)}
        isRequired={true}
      />
    </TabWrapper>
  );
};

export default GeneralTab;
