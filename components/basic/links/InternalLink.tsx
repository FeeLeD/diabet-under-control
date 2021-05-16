import React, { FC } from "react";
import Link from "next/link";
import { Box, Link as ChakraLink, BoxProps } from "@chakra-ui/react";

interface Props extends BoxProps {
  href: string;
}

const InternalLink: FC<Props> = ({ children, href, ...props }) => {
  return (
    <Box {...props} _hover={{ cursor: "pointer", opacity: 0.5 }}>
      <ChakraLink as={Link} href={href}>
        {children}
      </ChakraLink>
    </Box>
  );
};

export default InternalLink;
