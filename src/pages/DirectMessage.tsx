import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  GridItem,
  Grid,
  Button,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";
import Messages from "../components/Messages";
import Sidebar from "../components/Sidebar";
import { useDirectContext } from "../contexts/DirectContext";
import friends from "../mock/friends.json";
import Friend from "../types/friend";
import ChatHeader from "../components/ChatHeader";
import ChatCall from "../components/ChatCall";
import uuidv4 from "../utils/uuid";
import conversations from "../mock/conversations.json";
import Message from "../types/message";

const DirectMessage: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const { setCurrentFriend, currentFriend } = useDirectContext();

  const inputMessageHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
  };
  const sendMessage = () => {
    if (currentFriend) {
      setMessages((state) => [
        ...state,
        {
          id: uuidv4(),
          from: "me",
          text: newMessage,
        },
        {
          id: uuidv4(),
          from: currentFriend?.id,
          text: newMessage,
        },
      ]);
      setNewMessage("");
    }
  };
  useEffect(() => {
    if (setCurrentFriend) {
      setCurrentFriend(friends[0] as Friend);
    }
  }, [setCurrentFriend]);

  useEffect(() => {
    if (currentFriend) {
      const mockConversations = conversations as {
        [x: string]: Array<Message>;
      };
      setMessages(mockConversations[currentFriend.id]);
    }
  }, [currentFriend]);

  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={2}
    >
      <GridItem
        rowSpan={2}
        display={{ base: "none", sm: "none", md: "block" }}
        colSpan={2}
      >
        <Sidebar />
      </GridItem>
      <GridItem
        rowSpan={2}
        colSpan={{
          base: 7,
          sm: 7,
          md: 5,
          lg: 5,
          xl: 5,
        }}
      >
        <Box bg={"white"} pt={"5px"} pb={"10px"}>
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <ChatHeader />
            <Spacer />
            <ChatCall />
          </Flex>
        </Box>
        <Box height={"90%"}>
          <Grid templateRows="repeat(13, 1fr)" height={"100%"} gap={4}>
            <GridItem rowSpan={11}>
              <Messages messages={messages} />
            </GridItem>
            <GridItem rowSpan={2}>
              <Flex w={"100%"}>
                <Textarea
                  autoFocus
                  size="lg"
                  fontSize="md"
                  placeholder="Type Something..."
                  border="none"
                  resize={"none"}
                  borderRadius="md"
                  value={newMessage}
                  _focus={{
                    border: "1px solid black",
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  onChange={inputMessageHandle}
                  rows={3}
                />
                <Button
                  onClick={sendMessage}
                  color="white"
                  borderRadius="md"
                  colorScheme="messenger"
                  disabled={newMessage.trim().length === 0}
                >
                  <BiSend size={25} />
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default React.memo(DirectMessage);
