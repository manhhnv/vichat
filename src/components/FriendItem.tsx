/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, AvatarBadge, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { useDirectContext } from "../contexts/DirectContext";
import useLastMessage from "../hooks/useLastMessage";
import { conversationsState } from "../utils/atom";

type FriendItemProps = {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
};

const FriendItem: React.FC<FriendItemProps> = ({
  id,
  name,
  avatar,
  isOnline,
}) => {
  const { setCurrentFriend } = useDirectContext();
  const conversations = useRecoilValue(conversationsState);
  const lastMessage = conversations[id][conversations[id].length - 1];
  const formattedLastMessage = useLastMessage(lastMessage.text);

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
              {lastMessage.from === "me" ? "You" : name.split(" ")[0]}:{" "}
              {formattedLastMessage}
            </Text>
            <Spacer />
            {/* <Text as={"div"}>{lastMessageDate}</Text> */}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default React.memo(FriendItem);
