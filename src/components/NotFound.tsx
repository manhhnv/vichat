import { Box, Text, Container } from "@chakra-ui/react";
import notFoundImg from "../assets/images/404-error.png";
import React from "react";

const NotFound: React.FC<{}> = () => {
    return (
        <Container flexDirection={"column"} display={"flex"}>
            <Box m={"auto"} mt={"100px"}>
                <img alt="not_found_image" src={notFoundImg} width={200} height={200} />
            </Box>
            <Text fontSize={"xl"} as={"h6"} textAlign={"center"}>404 | PAGE NOT FOUND</Text>
        </Container>
    )
}

export default React.memo(NotFound);
