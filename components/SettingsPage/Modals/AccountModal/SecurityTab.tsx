import React, { FC } from "react";
import { useGlobalState } from "hooks/useGlobalState";
import { DefaultInput } from "components/basic/inputs";
import TabWrapper from "./TabWrapper";

const SecurityTab: FC = () => {
  const { user } = useGlobalState();

  return (
    <TabWrapper applyProps={{ isDisabled: true }}>
      <DefaultInput
        w="343px"
        label="Почта"
        defaultValue={user.get()?.email}
        isDisabled
        isRequired
      />
      <DefaultInput w="343px" label="Пароль" isDisabled />
    </TabWrapper>
  );
};

export default SecurityTab;
