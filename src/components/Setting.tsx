import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  List,
  ListItem,
  ModalBody,
  Switch,
  Text,
  Divider,
  ModalFooter,
} from "@chakra-ui/react";
import { MdOutlineSettings } from "react-icons/md";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import React from "react";
import { useSettingContext } from "../contexts/SettingContext";

const Setting: React.FC<{}> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isEnableNotification,
    toggleEnableNotification,
    isEnableSound,
    toggleEnableSound,
  } = useSettingContext();

  return (
    <>
      <Button onClick={onOpen} ml={2} colorScheme="messenger" variant="outline">
        <MdOutlineSettings color="black" size={28} /> Settings
      </Button>
      <Modal onClose={onClose} size={"lg"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List>
              <ListItem mb={4}>
                <Switch
                  onChange={toggleEnableNotification}
                  defaultChecked
                  isChecked={isEnableNotification}
                  colorScheme="messenger"
                  size="lg"
                />
                <Text
                  fontWeight={"600"}
                  fontSize={18}
                  paddingLeft={6}
                  as="span"
                >
                  Notification
                </Text>
              </ListItem>
              <Divider mb={4} />
              <ListItem mb={4}>
                <Button
                  onClick={toggleEnableSound}
                  colorScheme={"messenger"}
                  variant="outline"
                >
                  {isEnableSound ? (
                    <GiSpeaker size={25} />
                  ) : (
                    <GiSpeakerOff size={25} />
                  )}
                </Button>
                <Text
                  fontWeight={"600"}
                  fontSize={18}
                  paddingLeft={6}
                  as="span"
                >
                  Sound
                </Text>
              </ListItem>
              <Divider mb={4} />
              <ListItem mb={4}>
                <Button colorScheme={"red"} variant="outline">
                  Sign out
                </Button>
              </ListItem>
            </List>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default React.memo(Setting);
