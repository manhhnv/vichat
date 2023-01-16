import { useDirectContext } from "../contexts/DirectContext";
import conversations from "../mock/conversations.json";
import Message from "../types/message";

const useConversation = (): Array<Message> => {
  const mockConversations = conversations as { [x: string]: Array<Message> };
  const { currentFriend } = useDirectContext();
  if (currentFriend) {
    return mockConversations[currentFriend.id];
  }
  return [];
};

export default useConversation;
