import { Box, Divider, Grid, GridItem, Tab, TabList, Tabs, Text } from "@chakra-ui/react"
import { Outlet } from "react-router-dom";

const Network = () => {
    return (
        <Box border="1px solid #EDF2F7">
            <Grid templateColumns="repeat(10, 1fr)" marginY={2} gap={4} paddingX={4}>
                <GridItem colSpan={5}>
                    <Tabs variant="unstyled">
                        <TabList>
                            <Tab>
                                <Text fontSize={"xl"} as={"b"}>Followers</Text>
                            </Tab>
                        </TabList>
                    </Tabs>
                </GridItem>
                <GridItem colSpan={5}>
                    <Tabs variant="enstyled">
                        <TabList>
                            <Tab>
                                <Text fontSize={"xl"} as={"b"}>Following</Text>
                            </Tab>
                        </TabList>
                    </Tabs>
                </GridItem>
            </Grid>
            <Divider />
            <Outlet/>
        </Box>
    )
}

export default Network;