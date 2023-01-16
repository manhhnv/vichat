import { Divider } from "@chakra-ui/react";
import React from "react";
import FriendList from "./FriendList";
import SidebarHeader from "./SidebarHeader";

const Sidebar: React.FC<{}> = () => {
  return (
    <>
      <SidebarHeader />
      <Divider />
      <FriendList />
    </>
  );
};

export default React.memo(Sidebar);
