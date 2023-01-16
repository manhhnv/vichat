import React from "react";
import { BsFillTelephoneFill, BsFillCameraVideoFill } from "react-icons/bs";
import { ButtonGroup, Tooltip, Button } from "@chakra-ui/react";

const ChatCall: React.FC<{}> = () => {
  return (
    <ButtonGroup gap="2">
      <Tooltip label="Audio call" placement="bottom">
        <Button colorScheme="messenger" variant={"ghost"}>
          <BsFillTelephoneFill size={25} />
        </Button>
      </Tooltip>
      <Tooltip label="Video call" placement="bottom">
        <Button colorScheme="messenger" variant={"ghost"}>
          <BsFillCameraVideoFill size={25} />
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
};

export default React.memo(ChatCall);
