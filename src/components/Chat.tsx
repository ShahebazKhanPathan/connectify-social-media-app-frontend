import { Avatar, Box, Button, Divider, Grid, GridItem, HStack, Input, Text } from "@chakra-ui/react";
import { FaImage } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";

const Chat = () => {
    return (
        <Box border="1px solid #EDF2F7">
            <Grid templateColumns="repeat(10, 1fr)" marginY={4} gap={4} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar size="lg" src="https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg"/>
                </GridItem>
                <GridItem colSpan={9}>
                    <HStack>
                        <Text as="b" fontSize="lg">Bill Gates</Text>
                        <Text color="gray">@billgates</Text>
                    </HStack>
                    <Text>Founder, Microsoft Corporation</Text>
                </GridItem>
            </Grid>
            <Divider />
            <Grid templateColumns="repeat(12, 1fr)" marginY={4} gap={4} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar size="sm" src="https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg"/>
                </GridItem>
                <GridItem colSpan={9}>
                    <Text as="b" fontSize="md">Bill Gates</Text>
                    <Text fontSize="md" marginY={2}>
                        If you're passionate about education, you need to read this book 'Brave New Words'.
                    </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text fontSize="sm" color={"gray"}>45 mins</Text>
                </GridItem>
            </Grid>
            <Grid templateColumns="repeat(12, 1fr)" marginY={4} gap={4} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar size="sm" src="https://bit.ly/dan-abramov"/>
                </GridItem>
                <GridItem colSpan={9}>
                    <Text as="b" fontSize="md">Shahebaz Khan</Text>
                    <Text fontSize="md" marginY={2}>
                        Thank you.
                    </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text fontSize="sm" color={"gray"}>48 mins</Text>
                </GridItem>
            </Grid>
            <Grid templateColumns="repeat(12, 1fr)" marginY={4} gap={4} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar size="sm" src="https://bit.ly/dan-abramov"/>
                </GridItem>
                <GridItem colSpan={9}>
                    <Text as="b" fontSize="md">Shahebaz Khan</Text>
                    <Text fontSize="md" marginY={2}>
                        What do you think would trend in 2025?
                    </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text fontSize="sm" color={"gray"}>48 mins</Text>
                </GridItem>
            </Grid>
            <Grid templateColumns="repeat(12, 1fr)" marginY={4} gap={4} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar size="sm" src="https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg"/>
                </GridItem>
                <GridItem colSpan={9}>
                    <Text as="b" fontSize="md">Bill Gates</Text>
                    <Text fontSize="md" marginY={2}>
                        A.I. would continue for the next 10 years, but I think Blockchain would be the next.
                    </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Text fontSize="sm" color={"gray"}>45 mins</Text>
                </GridItem>
            </Grid>
            <Grid templateColumns="repeat(12, 1fr)" marginY={5} gap={4} paddingX={4}>
                
                <GridItem colSpan={10}>
                    <Input paddingY={6} borderRadius={10} variant="filled" placeholder="Write a message..." />
                    <HStack marginTop={4} fontSize="xl" paddingX={2}>
                        <FaImage color="#D69E2E" />
                        <BsEmojiSmile color="#D69E2E"/>
                    </HStack>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button colorScheme="yellow" borderRadius={10} size="md">Send</Button>
                </GridItem>
            </Grid>
            <Divider />
        </Box>
    )
}

export default Chat;