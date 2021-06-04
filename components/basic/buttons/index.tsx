import React, { FC } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import withButtonStyles, {
  WithButtonStyleProps
} from "components/HOCs/withButtonStyles";

const EmptyButton: FC<ButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

const DefaultButton = React.forwardRef(
  (
    { children, styleProps, ...otherProps }: WithButtonStyleProps & ButtonProps,
    ref: React.LegacyRef<HTMLButtonElement>
  ) => {
    return (
      <Button ref={ref} {...styleProps} {...otherProps}>
        {children}
      </Button>
    );
  }
);

const MainButton = withButtonStyles(DefaultButton, "main", "large");
const MediumMainButton = withButtonStyles(DefaultButton, "main", "medium");
const SmallMainButton = withButtonStyles(DefaultButton, "main", "small");

const FilledButton = withButtonStyles(DefaultButton, "filled", "large");
const MediumFilledButton = withButtonStyles(DefaultButton, "filled", "medium");
const SmallFilledButton = withButtonStyles(DefaultButton, "filled", "small");

const GhostButton = withButtonStyles(DefaultButton, "ghost", "large");
const MediumGhostButton = withButtonStyles(DefaultButton, "ghost", "medium");
const SmallGhostButton = withButtonStyles(DefaultButton, "ghost", "small");

export {
  EmptyButton,
  MainButton,
  MediumMainButton,
  SmallMainButton,
  FilledButton,
  MediumFilledButton,
  SmallFilledButton,
  GhostButton,
  MediumGhostButton,
  SmallGhostButton
};
