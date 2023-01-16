import React, { useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import ChatMessage from "./ChatMessage";
import Message from "../types/message";

type MessagesProps = {
  messages: Message[];
}

const Messages: React.FC<MessagesProps> = ({messages}) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => elementRef.current?.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <Flex w="100%" h="100%" overflowY="scroll" flexDirection="column" p="3">
      {messages.map((message) => {
        return <ChatMessage key={message.id} {...message} />
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default React.memo(Messages);
