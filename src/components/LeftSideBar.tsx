import { Box, HStack, Heading, VStack, Text, Avatar, Grid, GridItem } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { FaBell, FaEnvelope, FaUserCircle  } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
    return (
        <VStack spacing={5} align="start">
            <Box>
                <Heading color="#D69E2E">Connectify</Heading>
            </Box>
            <Link to={"/"}>
                <HStack fontSize={"xl"} spacing={4}>
                    <AiFillHome />
                    <Text>Home</Text>
                </HStack>
            </Link>
            <Link to={"/notifications"}>
                <HStack fontSize={"xl"} spacing={4}>
                    <FaBell />
                    <Text>Notifications</Text>
                </HStack>
            </Link>
            <Link to={"/messages"}>
                <HStack fontSize={"xl"} spacing={4}>
                    <FaEnvelope />
                    <Text>Messages</Text>
                </HStack>
            </Link>
            <Link to={"/network"}>
                <HStack fontSize={"xl"} spacing={4}>
                    <BsFillPeopleFill />
                    <Text>Network</Text>
                </HStack>
            </Link>
            <HStack fontSize={"xl"} spacing={4}>
                <FaUserCircle />
                <Text>Profile</Text>
            </HStack>
            <Grid templateColumns="repeat(3, 1fr)" gap={2} marginTop={6}>
                <GridItem>
                    <Avatar src="https://bit.ly/dan-abramov" />
                </GridItem>
                <GridItem colSpan={2}>
                    <Text as="b">Shahebaz Khan</Text>
                    <Text color="grey">@shahebazkhan</Text>
                </GridItem>
            </Grid>
        </VStack>
    )
}

export default LeftSideBar;