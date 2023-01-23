import { Box, BoxProps, Text } from "@chakra-ui/react";
import React from "react";

const Logo: React.FC<BoxProps> = (props) => {
    return (
        <Box {...props}>
            <Text fontSize={"3xl"} fontWeight="bold">
                ViChat
            </Text>
        </Box>
    )
}

export default React.memo(Logo);
