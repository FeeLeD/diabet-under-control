import { ButtonProps } from "@chakra-ui/button";

export const buttonProps: ButtonProps = {
  borderRadius: "50px",
  fontWeight: "regular",
  _focus: {
    boxShadow: "0 0 0 3px #ACC3EC",
  },
};

export const largeButtonProps: ButtonProps = {
  h: "56px",
  fontSize: "17px",
  px: "20px",
  py: "15px",
};

export const mediumButtonProps: ButtonProps = {
  h: "48px",
  fontSize: "16px",
  px: "20px",
  py: "12px",
};

export const smallButtonProps: ButtonProps = {
  h: "37px",
  fontSize: "14px",
  px: "20px",
  py: "8px",
};

export const mainButtonProps: ButtonProps = {
  bg: "neutral.70",
  _hover: { opacity: 0.8 },
};

export const filledButtonProps: ButtonProps = {
  bg: "blue.50",
  color: "white",
  _hover: { bg: "blue.70" },
  _active: { bg: "blue.60" },
};

export const ghostButtonProps: ButtonProps = {
  bg: "none",
  color: "blue.50",
  borderWidth: "3px",
  borderColor: "#6A9ADD",
  _hover: { borderColor: "#384EBC", color: "blue.70" },
  _focus: { borderColor: "#4E7ACA" },
  _active: { borderColor: "#384EBC", color: "blue.70", opacity: 0.6 },
};
