import { Avatar, Button, Divider, Grid, GridItem, Text } from "@chakra-ui/react"

const Following = () => {
    return (
        <>
            <Grid templateColumns="repeat(10, 1fr)" marginY={4} gap={3} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar src="https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg"/>
                </GridItem>
                <GridItem colSpan={7}>
                    <Text as="b" fontSize="md">Bill Gates</Text>
                    <Text color="gray">@billgates</Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button size={"sm"} borderRadius={20} paddingX={5} variant={"outline"}>Following</Button>
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
                    <Button size={"sm"} borderRadius={20} paddingX={5} variant={"outline"}>Following</Button>
                </GridItem>
            </Grid>
            <Divider/>
        </>
    )
}

export default Following;