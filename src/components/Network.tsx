import { Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom";

const Network = () => {
    return (
        <Box border="1px solid #EDF2F7">
            <Grid templateColumns="repeat(10, 1fr)" marginY={4} gap={4} paddingX={4}>
                <GridItem colSpan={5} textAlign={"center"}>
                    <Link to={"/network/followers"}>
                        <Text fontSize={"xl"} as={"b"}>Followers</Text>
                    </Link>
                </GridItem>
                <GridItem colSpan={5} textAlign={"center"}>
                    <Link to={"/network/following"}>
                        <Text fontSize={"xl"} as={"b"}>Following</Text>
                    </Link>
                </GridItem>
            </Grid>
            <Divider />
            <Outlet/>
        </Box>
    )
}

export default Network;