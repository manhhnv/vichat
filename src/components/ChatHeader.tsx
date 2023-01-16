import { Flex, Box, Avatar, Text, AvatarBadge } from "@chakra-ui/react";
import React from "react";
import { useDirectContext } from "../contexts/DirectContext";

const ChatHeader: React.FC<{}> = () => {
  const { currentFriend } = useDirectContext();
  return (
    <Flex pl="2">
      <Box>
        <Avatar
          name={currentFriend?.name}
          src={currentFriend?.avatar}
          size={"lg"}
        >
          <AvatarBadge
            boxSize="1em"
            bg={currentFriend?.isOnline ? "green.500" : "gray.500"}
          />
        </Avatar>
      </Box>
      <Box m="auto" ml="2">
        <Text fontWeight={"bold"} fontSize={17} as={"span"}>
          {currentFriend?.name}
        </Text>
      </Box>
    </Flex>
  );
};

export default ChatHeader;
