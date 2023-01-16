import React from "react";
import { Box, Avatar } from "@chakra-ui/react";

const SidebarHeader: React.FC<{}> = () => {
    return (
        <Box bg={"white"} height={"10%"}>
            <Avatar
                margin={"11px"}
                size="lg"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
            />
        </Box>
    )
}

export default React.memo(SidebarHeader);
