import { Avatar, Box, Divider, Grid, GridItem, HStack, Text } from "@chakra-ui/react";

const Notifications = () => {
    return (
        <Box border="1px solid #EDF2F7">
            <Grid templateColumns="repeat(10, 1fr)" marginY={4} gap={4} paddingX={4}>
                <GridItem>
                    <Text fontSize={"xl"} as={"b"}>Notifications</Text>
                </GridItem>
            </Grid>
            <Divider />
            <Grid templateColumns="repeat(10, 1fr)" marginY={2} gap={3} paddingX={4} >
                <GridItem colSpan={1}>
                    <Avatar src="https://pbs.twimg.com/profile_images/1257381512498077696/ACJBYZ-n_400x400.jpg"/>
                </GridItem>
                <GridItem colSpan={8}>
                    <HStack gap={1}>
                        <Text as="b" fontSize="md">Dhruv Rathee</Text>
                        <Text color="gray">liked your post.</Text>.
                    </HStack>
                    <Box padding={4} border="1px solid #E2E8F0" marginY={3} borderRadius={10}>
                        <Text color={"#718096"}>
                            33-year-old Trevor W. Branham has been charged for the crash.
                            Branham's Chevrolet truck can be seen speeding and swerving before weaving out of the way to avoid a stalled car in the right lane...
                        </Text>
                    </Box>
                </GridItem>
                <GridItem>
                    <Text color={"gray"}>1 hr</Text>                    
                </GridItem>
            </Grid>
            <Divider />
            <Grid templateColumns="repeat(10, 1fr)" marginY={3} gap={3} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar src="https://bit.ly/kent-c-dodds"/>
                </GridItem>
                <GridItem colSpan={8}>
                    <HStack gap={1}>
                        <Text as="b" fontSize="md">John Philips</Text>
                        <Text color="gray">commented your post.</Text>.
                    </HStack>
                    <Text marginY={2}>These people must be in jail for a long time.</Text>
                    <Box padding={4} border="1px solid #E2E8F0" marginY={3} borderRadius={10}>
                        <Text color={"#718096"}>
                            33-year-old Trevor W. Branham has been charged for the crash.
                            Branham's Chevrolet truck can be seen speeding and swerving before weaving out of the way to avoid a stalled car in the right lane...
                        </Text>
                    </Box>
                </GridItem>
                <GridItem>
                    <Text color={"gray"}>1 hr</Text>                    
                </GridItem>
            </Grid>
            <Divider />
            <Grid templateColumns="repeat(10, 1fr)" marginY={3} gap={3} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar src="https://bit.ly/broken-link"/>
                </GridItem>
                <GridItem colSpan={8}>
                    <HStack gap={1}>
                        <Text color="gray">Your contact</Text>
                        <Text as="b" fontSize="md">Naveed Ali</Text>
                        <Text color="gray">(@naveedali123) is on Connectify!</Text>.
                    </HStack>
                </GridItem>
                <GridItem>
                    <Text color={"gray"}>2 hr</Text>                    
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Notifications;