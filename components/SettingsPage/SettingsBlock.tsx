import React, { FC } from "react";
import { Stack, useDisclosure } from "@chakra-ui/react";
import SettingsMenuItem from "./SettingsMenuItem";
import AccountModal from "./Modals/AccountModal";

const SettingsBlock: FC = () => {
  const account = useDisclosure();
  const insulin = useDisclosure();
  const measurement = useDisclosure();
  const notifications = useDisclosure();
  const exporting = useDisclosure();

  const SETTINGS_MENU = [
    {
      title: "Настройки аккаунта",
      description: "Изменить данные аккаунта",
      onClick: account.onOpen
    },
    {
      title: "Расчет инсулина",
      description: "Изменить коэффициенты",
      onClick: account.onOpen
    },
    {
      title: "Типы измерений",
      description: "Редактировать названия типов",
      onClick: account.onOpen
    },
    {
      title: "Настройки оповещений",
      description: "Выбрать время оповещений",
      onClick: account.onOpen
    },
    {
      title: "Экспортировать данные",
      description: "Определить настройки экспорта",
      onClick: account.onOpen
    }
  ];

  const accountModal = (
    <AccountModal isOpen={account.isOpen} onClose={account.onClose} />
  );

  return (
    <Stack spacing="32px">
      {SETTINGS_MENU.map((item, i) => (
        <SettingsMenuItem
          key={i}
          title={item.title}
          description={item.description}
          onClick={account.onOpen}
        />
      ))}

      {accountModal}
    </Stack>
  );
};

export default SettingsBlock;
