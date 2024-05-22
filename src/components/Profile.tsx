import { Avatar, Box, Button, Divider, Grid, GridItem, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import { GrLocation } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

const Profile = () => {
    return (
        <Box border="1px solid #EDF2F7">
            <Grid templateColumns="repeat(10, 1fr)" paddingX={4} marginY={4} gap={2}>
                <GridItem colSpan={3}>
                    <Avatar size="2xl" src="https://bit.ly/dan-abramov"/>
                </GridItem>
                <GridItem colSpan={7}>
                    <Text as="b" fontSize="xl">Shahebaz Khan</Text>
                    <Button float={"right"} size={"sm"} borderRadius={20} paddingX={5} variant={"outline"}>Edit Profile</Button>
                    <Text color={"gray"}>@shahebazkhan</Text>
                    <Text marginY={3}>I am a software engineer actively building a strong foundation in backend development using Node.js, Express.js, React and MongoDB.</Text>
                    <HStack>
                        <GrLocation />
                        <Text color={"gray"}>Aurangabad, Maharastra</Text>
                    </HStack>
                </GridItem>
            </Grid>
            <Divider />
            <Grid templateColumns="repeat(10, 1fr)" marginY={5} gap={4} paddingX={4}>
                <GridItem colSpan={10}>
                    <Text fontSize={"xl"} as={"b"}>Posts</Text>
                </GridItem>
            </Grid>
            <Grid templateColumns="repeat(10, 1fr)" marginY={3} gap={2} paddingX={4}>
                <GridItem colSpan={1}>
                    <Avatar size="md" src="https://bit.ly/dan-abramov" />
                </GridItem>
                <GridItem colSpan={9}>
                    <HStack>
                        <Text as="b" fontSize="md">Shahebaz Khan</Text>
                        <Text fontSize="md" color="grey">@shahebazkhan - May 14</Text>
                    </HStack>
                    <Text marginY={2}>Just released a 32 mins long video on Cuba Missile Crisis.
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
                    <Avatar size="md" src="https://bit.ly/dan-abramov" />
                </GridItem>
                <GridItem colSpan={9}>
                    <HStack>
                        <Text as="b" fontSize="md">Shahebaz Khan</Text>
                        <Text fontSize="md" color="grey">@shahebazkhan - May 14</Text>
                    </HStack>
                    <Text marginY={2}>Just released a 32 mins long video on Cuba Missile Crisis.
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
                    <Avatar size="md" src="https://bit.ly/dan-abramov" />
                </GridItem>
                <GridItem colSpan={9}>
                    <HStack>
                        <Text as="b" fontSize="md">Shahebaz Khan</Text>
                        <Text fontSize="md" color="grey">@shahebazkhan - May 14</Text>
                    </HStack>
                    <Text marginY={2}>Just released a 32 mins long video on Cuba Missile Crisis.
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
        </Box>
    )
}

export default Profile;