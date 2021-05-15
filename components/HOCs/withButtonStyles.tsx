import React from "react";
import { ButtonProps } from "@chakra-ui/button";
import {
  buttonProps,
  largeButtonProps,
  mediumButtonProps,
  smallButtonProps,
  mainButtonProps,
  filledButtonProps,
  ghostButtonProps,
} from "components/basic/buttons/buttonProps";

export interface WithButtonStyleProps {
  styleProps: ButtonProps;
}

const withButtonStyles = <T extends WithButtonStyleProps>(
  WrappedButton: React.ComponentType<T>,
  style: "main" | "filled" | "ghost" = "main",
  size: "large" | "medium" | "small" = "large"
) => {
  const ComponentWithButtonProps = React.forwardRef(
    (props: Omit<T, keyof WithButtonStyleProps>, ref) => {
      const sizeProps = React.useMemo(() => {
        switch (size) {
          case "small":
            return smallButtonProps;
          case "medium":
            return mediumButtonProps;
          default:
            return largeButtonProps;
        }
      }, []);

      const styleProps = React.useMemo(() => {
        switch (style) {
          case "filled":
            return filledButtonProps;
          case "ghost":
            return ghostButtonProps;
          default:
            return mainButtonProps;
        }
      }, []);

      return (
        <WrappedButton
          ref={ref}
          {...(props as T)}
          styleProps={{ ...buttonProps, ...styleProps, ...sizeProps }}
        />
      );
    }
  );

  return ComponentWithButtonProps;
};

export default withButtonStyles;
