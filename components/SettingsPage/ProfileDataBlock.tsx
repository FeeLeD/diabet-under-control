import React, { FC } from "react";
import { useGlobalState } from "hooks/useGlobalState";
import { Stack, HStack, Text } from "@chakra-ui/react";

const ProfileDataBlock: FC = () => {
  const { user, profile } = useGlobalState();

  return (
    <Stack bg="neutral.40" borderRadius="8px" p="32px" spacing="32px">
      <HStack justify="space-between">
        <Text>Почта</Text>
        <Text>{user.get()?.email}</Text>
      </HStack>

      <HStack justify="space-between">
        <Text>Имя</Text>
        <Text>{user.get()?.firstName}</Text>
      </HStack>

      <HStack justify="space-between">
        <Text>Фамилия</Text>
        <Text>{user.get()?.lastName}</Text>
      </HStack>

      <HStack justify="space-between">
        <Text>Дата рождения</Text>
        <Text>{profile.get()?.birthDate ?? "_._"}</Text>
      </HStack>

      <HStack justify="space-between">
        <Text>Масса тела</Text>
        <Text>{profile.get()?.mass ? `${profile.get()?.mass} кг` : "_._"}</Text>
      </HStack>

      <HStack justify="space-between">
        <Text>Тип диабета</Text>
        <Text>
          {profile.get()?.diabetesType
            ? profile.get()?.diabetesType === 1
              ? "1 тип"
              : "2 тип"
            : "_._"}
        </Text>
      </HStack>

      <HStack justify="space-between">
        <Text>Тип лекарств</Text>
        <Text>
          {profile.get()?.drugType
            ? profile.get()?.drugType === "insulin"
              ? "Инсулин"
              : "Таблетки"
            : "_._"}
        </Text>
      </HStack>
    </Stack>
  );
};

export default ProfileDataBlock;
