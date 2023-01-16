/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, AvatarBadge, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useDirectContext } from "../contexts/DirectContext";
import useLastMessage from "../hooks/useLastMessage";

type FriendItemProps = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageDate: string;
  isOnline: boolean;
};

const FriendItem: React.FC<FriendItemProps> = ({
  id,
  name,
  avatar,
  lastMessage,
  lastMessageDate,
  isOnline,
}) => {
  const formattedLastMessage = useLastMessage(lastMessage);
  const { setCurrentFriend } = useDirectContext();

  const switchMessage = useCallback(() => {
    if (setCurrentFriend) {
      setCurrentFriend({
        id,
        name,
        avatar,
        isOnline,
      });
    }
  }, [setCurrentFriend]);

  return (
    <Flex onClick={switchMessage} cursor={"pointer"}>
      <Box>
        <Avatar size={"lg"} name={name} src={avatar}>
          {isOnline && <AvatarBadge boxSize="1em" bg={"green.500"} />}
        </Avatar>
      </Box>
      <Box w={"100%"}>
        <Flex
          justifyContent={"space-between"}
          flexDirection="column"
          paddingLeft={2}
        >
          <Box>
            <Text fontWeight={"bold"} fontSize={17} as={"span"}>
              {name}
            </Text>
          </Box>
          <Flex>
            <Text flex={1} as={"div"}>
              You: {formattedLastMessage}
            </Text>
            <Spacer />
            <Text as={"div"}>{lastMessageDate}</Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default React.memo(FriendItem);
