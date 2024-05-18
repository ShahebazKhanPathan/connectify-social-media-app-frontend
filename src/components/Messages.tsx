import { Avatar, Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import LeftSideBar from "./LeftSideBar";
import { Outlet } from "react-router-dom";

const Messages = () => {
    return (
        <Grid templateColumns="repeat(12, 1fr)" padding={5} gap={8}>
            <GridItem></GridItem>
            <GridItem colSpan={2}>
                <LeftSideBar />
            </GridItem>
            <GridItem colSpan={3}>
                <Box border="1px solid #EDF2F7">
                    <Grid templateColumns="repeat(10, 1fr)" marginY={4} gap={4} paddingX={4}>
                        <GridItem>
                            <Text fontSize={"xl"} as={"b"}>Messages</Text>
                        </GridItem>
                    </Grid>
                    <Divider />
                    <Grid templateColumns="repeat(10, 1fr)" marginY={5} gap={3} paddingX={4} >
                        <GridItem colSpan={1}>
                            <Avatar src="https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg"/>
                        </GridItem>
                        <GridItem colSpan={9}>
                            <Text as="b" fontSize="md">Bill Gates</Text>
                            <Text color="gray">@billgates</Text>
                        </GridItem>
                    </Grid>
                    <Divider />
                    <Grid templateColumns="repeat(10, 1fr)" marginY={5} gap={3} paddingX={4} >
                        <GridItem colSpan={1}>
                            <Avatar src="https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"/>
                        </GridItem>
                        <GridItem colSpan={9}>
                            <Text as="b" fontSize="md">Elon Musk</Text>
                            <Text color="gray">@elonmusk</Text>
                        </GridItem>
                    </Grid>
                    <Divider />
                    <Grid templateColumns="repeat(10, 1fr)" marginY={5} gap={3} paddingX={4} >
                        <GridItem colSpan={1}>
                            <Avatar src="https://pbs.twimg.com/profile_images/1257381512498077696/ACJBYZ-n_400x400.jpg"/>
                        </GridItem>
                        <GridItem colSpan={9}>
                            <Text as="b" fontSize="md">Dhruv Rathee</Text>
                            <Text color="gray">@dhruvrathee</Text>
                        </GridItem>
                    </Grid>
                    <Divider />
                    <Grid templateColumns="repeat(10, 1fr)" marginY={5} gap={3} paddingX={4} >
                        <GridItem colSpan={1}>
                            <Avatar src="https://bit.ly/prosper-baba"/>
                        </GridItem>
                        <GridItem colSpan={9}>
                            <Text as="b" fontSize="md">Prosper Baba</Text>
                            <Text color="gray">@prosper-baba</Text>
                        </GridItem>
                    </Grid>
                    <Divider />
                    <Grid templateColumns="repeat(10, 1fr)" marginY={5} gap={3} paddingX={4} >
                        <GridItem colSpan={1}>
                            <Avatar src="https://bit.ly/code-beast"/>
                        </GridItem>
                        <GridItem colSpan={9}>
                            <Text as="b" fontSize="md">Code Beast</Text>
                            <Text color="gray">@codebeast</Text>
                        </GridItem>
                    </Grid>
                    <Divider />
                </Box>
            </GridItem>
            <GridItem colSpan={5}>
                <Outlet/>
            </GridItem>
            <GridItem></GridItem>
        </Grid>
    )
}

export default Messages;