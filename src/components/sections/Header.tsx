import React from "react";
import { Box, Flex, Button, FlexProps } from "@chakra-ui/react";
import Logo from "../Logo";

const Header = (props: FlexProps) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      {...props}
    >
      <Flex align="center">
        <Logo w="100px" />
      </Flex>
    </Flex>
  );
};

export default Header;
