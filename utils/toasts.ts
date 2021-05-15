import { UseToastOptions } from "@chakra-ui/react";

export const badToastCreator: (text: string) => UseToastOptions = (text) => {
  return {
    title: "Что-то пошло не так...",
    description: text,
    status: "error",
    duration: 5000,
    isClosable: true,
  };
};

export const successToastCreator: (text: string) => UseToastOptions = (
  text
) => {
  return {
    title: "Успех!",
    description: text,
    status: "success",
    duration: 5000,
    isClosable: true,
  };
};

export const warnToastCreator: (text: string) => UseToastOptions = (text) => ({
  title: "Предупреждение",
  description: text,
  status: "warning",
  duration: 5000,
  isClosable: true,
});

export const badToast = badToastCreator("Попробуйте перезагрузить страницу");
