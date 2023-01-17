import { atom } from "recoil";
import conversations from "../mock/conversations.json";
import friends from "../mock/friends.json";
import Friend from "../types/friend";
import Message from "../types/message";

export const conversationsState = atom<{ [x: string]: Array<Message> }>({
  key: "conversationsState",
  default: conversations,
});

export const friendsState = atom<Friend[]>({
  key: "friendsState",
  default: friends,
});
