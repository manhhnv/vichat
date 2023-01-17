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
import Friend from "../types/friend";
import ChatHeader from "../components/ChatHeader";
import ChatCall from "../components/ChatCall";
import uuidv4 from "../utils/uuid";
import { useRecoilState } from "recoil";
import { conversationsState, friendsState } from "../utils/atom";

const DirectMessage: React.FC<{}> = () => {
  const [newMessage, setNewMessage] = useState("");
  const { setCurrentFriend, currentFriend } = useDirectContext();
  const [conversations, setConversations] = useRecoilState(conversationsState);
  const [friends, setFriends] = useRecoilState(friendsState);

  const inputMessageHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
  };
  const sendMessage = () => {
    if (currentFriend) {
      const text = newMessage;
      setConversations((conversations) => {
        return {
          ...conversations,
          [currentFriend.id]: [
            ...conversations[currentFriend.id],
            {
              id: uuidv4(),
              from: "me",
              text: text,
            },
          ],
        };
      });
      const friendIndex = friends.findIndex((item) => item.id === currentFriend.id);
      if (friendIndex !== -1) {
          const cloneFriend = Object.assign({}, currentFriend);
          const cloneListFriends = [...friends];
          cloneListFriends.splice(friendIndex, 1);
          cloneListFriends.unshift(cloneFriend);
          setFriends(cloneListFriends);
      }
      setNewMessage("");
      setTimeout(() => {
        setConversations((conversations) => {
          return {
            ...conversations,
            [currentFriend.id]: [
              ...conversations[currentFriend.id],
              {
                id: uuidv4(),
                from: currentFriend.id,
                text: text,
              },
            ],
          };
        });
      }, 1000);
    }
  };
  useEffect(() => {
    if (setCurrentFriend) {
      setCurrentFriend(friends[0] as Friend);
    }
  }, [friends, setCurrentFriend]);

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
              {currentFriend?.id && (
                <Messages messages={conversations[currentFriend.id]} />
              )}
            </GridItem>
            <GridItem rowSpan={2}>
              <Flex w={"100%"}>
                <Textarea
                  autoFocus
                  size="lg"
                  fontSize="md"
                  placeholder={"Type Something...\nPress Ctrl + Enter to send"}
                  border="1px"
                  borderColor={"gray"}
                  resize={"none"}
                  borderRadius="md"
                  value={newMessage}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
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
