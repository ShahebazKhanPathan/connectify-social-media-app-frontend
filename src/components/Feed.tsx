import { Avatar, Box, Button, Divider, Grid, GridItem, HStack, Input, SimpleGrid, Text, } from "@chakra-ui/react";
import { GoShareAndroid } from "react-icons/go";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaImage } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";

const Feed = () => {
    return (
        <Box border="1px solid #EDF2F7">
            <Grid templateColumns="repeat(10, 1fr)" marginY={2} gap={4} paddingX={4} paddingY={3}>
                <GridItem colSpan={1}>
                    <Avatar size="md" src="https://bit.ly/dan-abramov" />
                </GridItem>
                <GridItem fontSize="xl" colSpan={8}>
                    <Input fontSize="xl" variant="unstyled" placeholder="Write a post...." />
                    <HStack marginTop={4}>
                        <FaImage color="#D69E2E" />
                        <BsEmojiSmile color="#D69E2E"/>
                    </HStack>
                </GridItem>
                <GridItem>
                    <Button size={"sm"} borderRadius={20} paddingX={6} colorScheme="yellow">Post</Button>
                </GridItem>
            </Grid>
            <Divider />
            <Grid templateColumns="repeat(10, 1fr)" marginY={3} gap={2} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar size="md" src="https://pbs.twimg.com/profile_images/1257381512498077696/ACJBYZ-n_400x400.jpg" />
                </GridItem>
                <GridItem colSpan={9}>
                    <HStack>
                        <Text as="b" fontSize="md">Dhruv Rathee</Text>
                        <BsFillPatchCheckFill color="#D69E2E" />
                        <Text fontSize="md" color="grey"> @dhruvrathee - May 14</Text>
                    </HStack>
                    <Text marginBottom={2}>Just released a 32 mins long video on Cuba Missile Crisis.
                        It's not just the longest video I ever produced but also the one with the highest animation quality. Aim is to reach documentary level eventually. Hope you enjoy.</Text>
                    <SimpleGrid columns={3}>
                        <HStack>
                            <FaRegHeart />
                            <Text color="grey">100K</Text>
                        </HStack>
                        <HStack>
                            <FaRegComment />
                            <Text color="grey">50K</Text>
                        </HStack>
                        <HStack>
                            <GoShareAndroid />
                            <Text color="grey">30K</Text>
                        </HStack>
                    </SimpleGrid>
                </GridItem>
            </Grid>
            <Divider />
            <Grid templateColumns="repeat(10, 1fr)" marginY={3} gap={2} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar size="md" src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg" />
                </GridItem>
                <GridItem colSpan={9}>
                    <HStack>
                        <Text as="b" fontSize="md">Mr. Beast</Text>
                        <BsFillPatchCheckFill color="#D69E2E" />
                        <Text fontSize="md" color="grey"> @dhruvrathee - May 14</Text>
                    </HStack>
                    <Text marginBottom={2}>Hey billionaires! I'd love to take some of your unfathomable wealth and use it to complete whatever philanthropic project that matters to you for a video on our beast philanthropy channel! (100% of all the revenue on this channel goes back into the charity)</Text>
                    <SimpleGrid columns={3}>
                        <HStack>
                            <FaRegHeart />
                            <Text color="grey">100K</Text>
                        </HStack>
                        <HStack>
                            <FaRegComment />
                            <Text color="grey">50K</Text>
                        </HStack>
                        <HStack>
                            <GoShareAndroid />
                            <Text color="grey">30K</Text>
                        </HStack>
                    </SimpleGrid>
                </GridItem>
            </Grid>
            <Divider />
            <Grid templateColumns="repeat(10, 1fr)" marginY={3} gap={2} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar size="md" src="https://bit.ly/kent-c-dodds" />
                </GridItem>
                <GridItem colSpan={9}>
                    <HStack>
                        <Text as="b" fontSize="md">John Philips</Text>
                        <Text fontSize="md" color="grey">@johnphilips - May 15</Text>
                    </HStack>
                    <Text marginBottom={2}>Hello, how are you everyone? What's going on? Let's talk about the heavy rain recently observed in the Dubai.</Text>
                    <SimpleGrid columns={3}>
                        <HStack>
                            <FaRegHeart />
                            <Text color="grey">5K</Text>
                        </HStack>
                        <HStack>
                            <FaRegComment />
                            <Text color="grey">1K</Text>
                        </HStack>
                        <HStack>
                            <GoShareAndroid />
                            <Text color="grey">100</Text>
                        </HStack>
                    </SimpleGrid>
                </GridItem>
            </Grid>
            <Divider />
            <Grid templateColumns="repeat(10, 1fr)" marginY={3} gap={2} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar size="md" src="https://bit.ly/sage-adebayo" />
                </GridItem>
                <GridItem colSpan={9}>
                    <HStack>
                        <Text as="b" fontSize="md">Ryan Florence</Text>
                        <Text fontSize="md" color="grey">@ryanflora - May 14</Text>
                    </HStack>
                    <Text marginBottom={2}>It's been a nice time with the team India. I have never seen such a hard working people around the world. Good luck for the next World Cup, team India.</Text>
                    <SimpleGrid columns={3}>
                        <HStack>
                            <FaRegHeart />
                            <Text color="grey">2K</Text>
                        </HStack>
                        <HStack>
                            <FaRegComment />
                            <Text color="grey">50</Text>
                        </HStack>
                        <HStack>
                            <GoShareAndroid />
                            <Text color="grey">20</Text>
                        </HStack>
                    </SimpleGrid>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Feed;