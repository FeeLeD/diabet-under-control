import { extendTheme } from "@chakra-ui/react";
import { styles } from "./globalStyles";
import { colors } from "theme/colors";
import { fontSizes } from "theme/fontSizes";
import { fontWeights } from "theme/fontWeights";

const overrides = {
  styles,
  colors,
  fontSizes,
  fontWeights,
};

export default extendTheme(overrides);
