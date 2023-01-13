import React from "react";
import {
    Flex,
    Center,
    Text,
    Square,
    Box,
    SimpleGrid,
    GridItem,
    Grid,
    Hide,
    Avatar,
    Button,
    Icon,
    Divider,
    List,
    ListItem,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Switch,
    Heading,
    Spacer,
    ButtonGroup,
    Tooltip,
    AvatarBadge,
    Input,
    Textarea,
} from "@chakra-ui/react";
import { MdOutlineSettings } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import { BsFillTelephoneFill, BsFillCameraVideoFill } from "react-icons/bs";
import Messages from "../components/Messages";

const messages = [
    { from: "computer", text: "Hi, My Name is HoneyChat" },
    { from: "me", text: "Hey there" },
    { from: "me", text: "Myself Ferin Patel" },
    {
        from: "computer",
        text:
            "Nice to meet you. You can send me message and i'll reply you with same message."
    }
]

const DirectMessage: React.FC<{}> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Grid
            h="100vh"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(7, 1fr)"
            gap={2}
        >
            <GridItem
                rowSpan={2}
                display={{ base: "none", sm: "none", md: "block" }}
                colSpan={2}
            // bg="tomato"
            >
                <Box bg={"white"} height={"10%"}>
                    <Avatar
                        margin={"11px"}
                        size="lg"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                    />
                </Box>
                <Divider />
                <Box height={"90%"}>
                    <Grid templateRows="repeat(20, 1fr)" height={"100%"} gap={4}>
                        <GridItem id="list-friend" overflowY={"scroll"} rowSpan={18}>
                            <List>
                                <ListItem padding={3}>
                                    <Flex>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                name="Kent Dodds"
                                                src="https://bit.ly/kent-c-dodds"
                                            />
                                        </Box>
                                        <Box>
                                            <Flex
                                                justifyContent={"space-between"}
                                                flexDirection={"column"}
                                                paddingLeft={2}
                                            >
                                                <Box>
                                                    <Text fontWeight={"bold"} fontSize={17} as={"span"}>
                                                        John Alterthy
                                                    </Text>
                                                </Box>
                                                <Box>
                                                    <Text as={"span"}>
                                                        Hi there, I'm John and i come from American . . .
                                                        12:09
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Divider paddingTop={2} />
                                <ListItem padding={3}>
                                    <Flex>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                name="Kent Dodds"
                                                src="https://bit.ly/kent-c-dodds"
                                            />
                                        </Box>
                                        <Box>
                                            <Flex
                                                justifyContent={"space-between"}
                                                flexDirection={"column"}
                                                paddingLeft={2}
                                            >
                                                <Box>
                                                    <Text fontWeight={"bold"} fontSize={17} as={"span"}>
                                                        John Alterthy
                                                    </Text>
                                                </Box>
                                                <Box>
                                                    <Text as={"span"}>
                                                        Hi there, I'm John and i come from American . . .
                                                        12:09
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Divider paddingTop={2} />
                                <ListItem padding={3}>
                                    <Flex>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                name="Kent Dodds"
                                                src="https://bit.ly/kent-c-dodds"
                                            />
                                        </Box>
                                        <Box>
                                            <Flex
                                                justifyContent={"space-between"}
                                                flexDirection={"column"}
                                                paddingLeft={2}
                                            >
                                                <Box>
                                                    <Text fontWeight={"bold"} fontSize={17} as={"span"}>
                                                        John Alterthy
                                                    </Text>
                                                </Box>
                                                <Box>
                                                    <Text as={"span"}>
                                                        Hi there, I'm John and i come from American . . .
                                                        12:09
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Divider paddingTop={2} />
                                <ListItem padding={3}>
                                    <Flex>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                name="Kent Dodds"
                                                src="https://bit.ly/kent-c-dodds"
                                            />
                                        </Box>
                                        <Box>
                                            <Flex
                                                justifyContent={"space-between"}
                                                flexDirection={"column"}
                                                paddingLeft={2}
                                            >
                                                <Box>
                                                    <Text fontWeight={"bold"} fontSize={17} as={"span"}>
                                                        John Alterthy
                                                    </Text>
                                                </Box>
                                                <Box>
                                                    <Text as={"span"}>
                                                        Hi there, I'm John and i come from American . . .
                                                        12:09
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Divider paddingTop={2} />
                                <ListItem padding={3}>
                                    <Flex>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                name="Kent Dodds"
                                                src="https://bit.ly/kent-c-dodds"
                                            />
                                        </Box>
                                        <Box>
                                            <Flex
                                                justifyContent={"space-between"}
                                                flexDirection={"column"}
                                                paddingLeft={2}
                                            >
                                                <Box>
                                                    <Text fontWeight={"bold"} fontSize={17} as={"span"}>
                                                        John Alterthy
                                                    </Text>
                                                </Box>
                                                <Box>
                                                    <Text as={"span"}>
                                                        Hi there, I'm John and i come from American . . .
                                                        12:09
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Divider paddingTop={2} />
                                <ListItem padding={3}>
                                    <Flex>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                name="Kent Dodds"
                                                src="https://bit.ly/kent-c-dodds"
                                            />
                                        </Box>
                                        <Box>
                                            <Flex
                                                justifyContent={"space-between"}
                                                flexDirection={"column"}
                                                paddingLeft={2}
                                            >
                                                <Box>
                                                    <Text fontWeight={"bold"} fontSize={17} as={"span"}>
                                                        John Alterthy
                                                    </Text>
                                                </Box>
                                                <Box>
                                                    <Text as={"span"}>
                                                        Hi there, I'm John and i come from American . . .
                                                        12:09
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Divider paddingTop={2} />
                                <ListItem padding={3}>
                                    <Flex>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                name="Kent Dodds"
                                                src="https://bit.ly/kent-c-dodds"
                                            />
                                        </Box>
                                        <Box>
                                            <Flex
                                                justifyContent={"space-between"}
                                                flexDirection={"column"}
                                                paddingLeft={2}
                                            >
                                                <Box>
                                                    <Text fontWeight={"bold"} fontSize={17} as={"span"}>
                                                        John Alterthy
                                                    </Text>
                                                </Box>
                                                <Box>
                                                    <Text as={"span"}>
                                                        Hi there, I'm John and i come from American . . .
                                                        12:09
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Divider paddingTop={2} />
                                <ListItem padding={3}>
                                    <Flex>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                name="Kent Dodds"
                                                src="https://bit.ly/kent-c-dodds"
                                            />
                                        </Box>
                                        <Box>
                                            <Flex
                                                justifyContent={"space-between"}
                                                flexDirection={"column"}
                                                paddingLeft={2}
                                            >
                                                <Box>
                                                    <Text fontWeight={"bold"} fontSize={17} as={"span"}>
                                                        John Alterthy
                                                    </Text>
                                                </Box>
                                                <Box>
                                                    <Text as={"span"}>
                                                        Hi there, I'm John and i come from American . . .
                                                        12:09
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Divider paddingTop={2} />
                                <ListItem padding={3}>
                                    <Flex>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                name="Kent Dodds"
                                                src="https://bit.ly/kent-c-dodds"
                                            />
                                        </Box>
                                        <Box>
                                            <Flex
                                                justifyContent={"space-between"}
                                                flexDirection={"column"}
                                                paddingLeft={2}
                                            >
                                                <Box>
                                                    <Text fontWeight={"bold"} fontSize={17} as={"span"}>
                                                        John Alterthy
                                                    </Text>
                                                </Box>
                                                <Box>
                                                    <Text as={"span"}>
                                                        Hi there, I'm John and i come from American . . .
                                                        12:09
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Divider paddingTop={2} />
                                <ListItem padding={3}>
                                    <Flex>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                name="Kent Dodds"
                                                src="https://bit.ly/kent-c-dodds"
                                            />
                                        </Box>
                                        <Box>
                                            <Flex
                                                justifyContent={"space-between"}
                                                flexDirection={"column"}
                                                paddingLeft={2}
                                            >
                                                <Box>
                                                    <Text fontWeight={"bold"} fontSize={17} as={"span"}>
                                                        John Alterthy
                                                    </Text>
                                                </Box>
                                                <Box>
                                                    <Text as={"span"}>
                                                        Hi there, I'm John and i come from American . . .
                                                        12:09
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Divider paddingTop={2} />
                                <ListItem padding={3}>
                                    <Flex>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                name="Kent Dodds"
                                                src="https://bit.ly/kent-c-dodds"
                                            />
                                            
                                        </Box>
                                        <Box>
                                            <Flex
                                                justifyContent={"space-between"}
                                                flexDirection={"column"}
                                                paddingLeft={2}
                                            >
                                                <Box>
                                                    <Text fontWeight={"bold"} fontSize={17} as={"span"}>
                                                        John Alterthy
                                                    </Text>
                                                </Box>
                                                <Box>
                                                    <Text as={"span"}>
                                                        Hi there, I'm John and i come from American . . .
                                                        12:09
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </ListItem>
                                <Divider paddingTop={2} />
                            </List>
                        </GridItem>
                        <GridItem rowSpan={2}>
                            <Button
                                onClick={onOpen}
                                ml={2}
                                colorScheme="messenger"
                                variant="outline"
                            >
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
                                                <Switch defaultChecked colorScheme="messenger" size="lg" />
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
                                                {/* <Switch colorScheme="messenger" size="lg" /> */}
                                                <Button colorScheme={"messenger"} variant="outline">
                                                    <GiSpeaker size={25} />
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
                                                <Button colorScheme={"red"} variant='outline'>
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
                        </GridItem>
                    </Grid>
                </Box>
            </GridItem>
            <GridItem
                rowSpan={2}
                colSpan={{
                    base: 7,
                    sm: 7,
                    md: 5,
                    lg: 5,
                    xl: 5,
                }}
                // bg="green"
            >
                {/* header */}
                <Box bg={"white"} pt={"5px"} pb={"10px"}>
                    <Flex minWidth='max-content' alignItems='center' gap='2'>
                        <Flex pl='2'>
                            <Box>
                                <Avatar name="Kent Dodds"
                                    src="https://bit.ly/kent-c-dodds" size={"lg"}>
                                    <AvatarBadge boxSize="1em" bg="green.500" />
                                    </Avatar>
                            </Box>
                            <Box m="auto" ml="2">
                                <Text fontWeight={"bold"} fontSize={17} as={"span"}>
                                    John Alterthy
                                </Text>
                            </Box>
                        </Flex>
                        <Spacer />
                        <ButtonGroup gap='2'>
                            <Tooltip label="Audio call" placement="bottom">
                                <Button colorScheme='messenger' variant={"ghost"}>
                                    <BsFillTelephoneFill size={25} />
                                </Button>
                            </Tooltip>
                            <Tooltip label="Video call" placement="bottom">
                                <Button colorScheme='messenger' variant={"ghost"}>
                                    <BsFillCameraVideoFill size={25} />
                                </Button>
                            </Tooltip>
                        </ButtonGroup>
                    </Flex>
                </Box>
                {/* direct messages */}
                <Box height={"90%"}>
                    <Grid templateRows="repeat(13, 1fr)" height={"100%"} gap={4}>
                        <GridItem rowSpan={11}>
                            <Messages messages={messages} />
                        </GridItem>
                        <GridItem rowSpan={2}>
                            <Flex w={"100%"}>
                                <Textarea
                                    autoFocus
                                    size="lg"  fontSize="md"
                                    placeholder="Type Something..."
                                    border="none"
                                    resize={"none"}
                                    borderRadius="md"
                                    _focus={{
                                        border: "1px solid black",
                                    }}
                                    onKeyPress={(e) => {
                                        if (e.key === "Enter") {
                                        }
                                    }}
                                    onChange={(e) => {

                                    }}
                                    rows={3}
                                />
                                <Button
                                    // bg="black"
                                    color="white"
                                    borderRadius="md"
                                    // _hover={{
                                    //     bg: "white",
                                    //     color: "black",
                                    //     border: "1px solid black",
                                    // }}
                                    colorScheme="messenger"
                                    // disabled={inputMessage.trim().length <= 0}
                                    // onClick={handleSendMessage}
                                >
                                    Send
                                </Button>
                            </Flex>
                        </GridItem>
                    </Grid>
                </Box>
            </GridItem>
        </Grid>
    );
};

export default React.memo(DirectMessage);
