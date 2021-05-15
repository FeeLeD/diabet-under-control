import React from "react";
import { InputProps } from "@chakra-ui/input";
import { Input } from "@chakra-ui/react";

const GhostInput = React.forwardRef(
  (props: InputProps, ref: React.LegacyRef<HTMLInputElement>) => {
    return (
      <Input
        ref={ref}
        w="250px"
        h="96px"
        type="number"
        border="none"
        fontSize="96px"
        textAlign="center"
        placeholder="5.2"
        _focus={{
          boxShadow: "none",
        }}
        {...props}
      />
    );
  }
);

export default GhostInput;
