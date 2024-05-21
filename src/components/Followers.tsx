import { Avatar, Button, Divider, Grid, GridItem, Text } from "@chakra-ui/react"

const Followers = () => {
    return (
        <>
            <Grid templateColumns="repeat(10, 1fr)" marginY={4} gap={3} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar src="https://bit.ly/kent-c-dodds"/>
                </GridItem>
                <GridItem colSpan={7}>
                    <Text as="b" fontSize="md">John Philips</Text>
                    <Text color="gray">@johnphilips</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button size={"sm"} borderRadius={20} paddingX={5} color="white" backgroundColor="black">Follow</Button>
                </GridItem>
            </Grid>
            <Divider/>
             <Grid templateColumns="repeat(10, 1fr)" marginY={4} gap={3} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar src="https://pbs.twimg.com/profile_images/1257381512498077696/ACJBYZ-n_400x400.jpg"/>
                </GridItem>
                <GridItem colSpan={7}>
                    <Text as="b" fontSize="md">Dhruv Rathee</Text>
                    <Text color="gray">@dhruvrathee</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button size={"sm"} borderRadius={20} paddingX={5} color="white" backgroundColor="black">Follow</Button>
                </GridItem>
            </Grid>
            <Divider/>
             <Grid templateColumns="repeat(10, 1fr)" marginY={4} gap={3} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar src="https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"/>
                </GridItem>
                <GridItem colSpan={7}>
                    <Text as="b" fontSize="md">Elon Musk</Text>
                    <Text color="gray">@elonmusk</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button size={"sm"} borderRadius={20} paddingX={5} color="white" backgroundColor="black">Follow</Button>
                </GridItem>
            </Grid>
            <Divider/>
             <Grid templateColumns="repeat(10, 1fr)" marginY={4} gap={3} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar src="https://bit.ly/code-beast"/>
                </GridItem>
                <GridItem colSpan={7}>
                    <Text as="b" fontSize="md">Code Beast</Text>
                    <Text color="gray">@code-beast</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button size={"sm"} borderRadius={20} paddingX={5} color="white" backgroundColor="black">Follow</Button>
                </GridItem>
            </Grid>
            <Divider/>
             <Grid templateColumns="repeat(10, 1fr)" marginY={4} gap={3} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar src="https://bit.ly/prosper-baba"/>
                </GridItem>
                <GridItem colSpan={7}>
                    <Text as="b" fontSize="md">Prosper Baba</Text>
                    <Text color="gray">@prosper-baba</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button size={"sm"} borderRadius={20} paddingX={5} color="white" backgroundColor="black">Follow</Button>
                </GridItem>
            </Grid>
        </>
    )
}

export default Followers;