const useLastMessage = (lastMessage: string): string => {
  return lastMessage.length <= 43
    ? lastMessage
    : lastMessage.slice(0, 43).concat(". . .");
};

export default useLastMessage;
