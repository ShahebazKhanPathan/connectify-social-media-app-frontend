import { Avatar, Button, Container, Grid, GridItem, HStack, Heading, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { BsFillPatchCheckFill } from "react-icons/bs";

const RightSideBar = () => {
    return (
        <>
            <InputGroup marginBottom={4}>
                <InputLeftElement>
                    <FiSearch />
                </InputLeftElement>
                <Input focusBorderColor="#EDF2F7" backgroundColor="#EDF2F7" placeholder="Search" borderRadius={20} />
            </InputGroup>

            <Container paddingX={4} border="1px solid #EDF2F7" borderRadius={14}>
                <Grid>
                    <GridItem>
                        <Heading size="md" marginY={6}>Who to follow</Heading>
                    </GridItem>
                </Grid>

                <Grid templateColumns="repeat(7, 1fr)" gap={4} marginBottom={6}>
                    <GridItem>
                        <Avatar size="md" src="https://pbs.twimg.com/profile_images/1395254075285860354/LG45JNi8_400x400.jpg" />
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Text as="b" fontSize="md">AajTak</Text>
                        <Text fontSize={"md"} color={"grey"}>@aajtak</Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Button size={"sm"} borderRadius={20} paddingX={5} color="white" backgroundColor="black">Follow</Button>
                    </GridItem>
                </Grid>

                <Grid templateColumns="repeat(7, 1fr)" gap={4} marginBottom={6}>
                    <GridItem>
                        <Avatar size="md" src="https://pbs.twimg.com/profile_images/1529107170448523264/q3VwEx38_400x400.jpg" />
                    </GridItem>
                    <GridItem colSpan={3}>
                        <HStack>
                            <Text as="b" fontSize="md">BBC News</Text>
                            <BsFillPatchCheckFill color="#D69E2E" />
                        </HStack>
                        <Text fontSize={"md"} color={"grey"}>@BBCWorld</Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Button size={"sm"} borderRadius={20} paddingX={5} color="white" backgroundColor="black">Follow</Button>
                    </GridItem>
                </Grid>

                <Grid templateColumns="repeat(7, 1fr)" gap={4} marginBottom={6}>
                    <GridItem>
                        <Avatar size="md" src="https://pbs.twimg.com/profile_images/1633247750010830848/8zfRrYjA_400x400.png" />
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Text as="b" fontSize="md">GitHub</Text>
                        <Text fontSize={"md"} color={"grey"}>@github</Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Button size={"sm"} borderRadius={20} paddingX={5} color="white" backgroundColor="black">Follow</Button>
                    </GridItem>
                </Grid>

                <Grid templateColumns="repeat(7, 1fr)" gap={4} marginBottom={6}>
                    <GridItem>
                        <Avatar size="md" src="https://pbs.twimg.com/profile_images/1744289390736613378/alcfxov3_400x400.jpg" />
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Text as="b" fontSize="md">Binance</Text>
                        <Text fontSize={"md"} color={"grey"}>@binance</Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Button size={"sm"} borderRadius={20} paddingX={5} color="white" backgroundColor="black">Follow</Button>
                    </GridItem>
                </Grid>
                
            
            </Container>
        </>
    )
}

export default RightSideBar;