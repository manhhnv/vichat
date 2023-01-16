import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Message from "../types/message";
import friends from "../mock/friends.json";

const ChatMessage: React.FC<Message> = ({ from, text }) => {
  if (from === "me") {
    return (
      <Flex w="100%" justify="flex-end">
        <Flex
          borderRadius={"full"}
          bg="messenger.500"
          color="white"
          maxW="350px"
          my="1"
          p="3"
        >
          <Text>{text}</Text>
        </Flex>
      </Flex>
    );
  }
  const friend = friends.find((item) => item.id === from);
  if (friend) {
    return (
      <Flex w="100%">
        <Avatar name={friend.name} src={friend.avatar} />
        <Flex
          borderRadius={"full"}
          bg="gray.100"
          color="black"
          maxW="350px"
          my="1"
          p="3"
        >
          <Text>{text}</Text>
        </Flex>
      </Flex>
    );
  }
  return <></>;
};

export default React.memo(ChatMessage);
