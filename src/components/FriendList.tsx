import React from "react";
import {
  Box,
  Grid,
  GridItem,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import FriendItem from "./FriendItem";
import Setting from "./Setting";
import { useDirectContext } from "../contexts/DirectContext";
import { useRecoilValue } from "recoil";
import { friendsState } from "../utils/atom";

const FriendList: React.FC<{}> = () => {
  const { currentFriend } = useDirectContext();
  const listFriends = useRecoilValue(friendsState);

  return (
    <Box height={"90%"}>
      <Grid templateRows="repeat(20, 1fr)" height={"100%"} gap={4}>
        <GridItem id="list-friend" overflowY={"scroll"} rowSpan={18}>
          <List>
            {listFriends.map((friend) => {
              return (
                <React.Fragment key={friend.id}>
                  <ListItem bg={currentFriend?.id === friend.id ? "#F3F3F3" : "#ffffff"} _hover={{
                    backgroundColor: "#F3F3F3"
                  }} padding={3}>
                    <FriendItem {...friend} />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              )
            })}
          </List>
        </GridItem>
        <GridItem rowSpan={2}>
          <Setting />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default React.memo(FriendList);
