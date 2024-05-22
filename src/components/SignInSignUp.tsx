import { Box, Button, Grid, GridItem, Heading, Input, Text } from "@chakra-ui/react"

const SignInSignUp = () => {
    return (
        <Box padding={5}>
            <Grid templateColumns="repeat(12, 1fr)" gap={2}>
                <GridItem></GridItem>
                <GridItem colSpan={5}>
                    <Heading fontSize={"7xl"} color="#D69E2E">Connectify</Heading>
                    <Text fontSize={"xl"} marginY={5}>
                        Stay connected with the world in real-time.
                        Share your thoughts, follow trends, and engage with a vibrant community.
                        Connectify brings you the best of social media, powered by cutting-edge technology for a seamless experience.</Text>
                    <Grid templateColumns="repeat(10, 1fr)" paddingY={3}>
                        <GridItem></GridItem>
                        <GridItem colSpan={6}>
                            <Text fontSize={"2xl"}>Sign In</Text>
                            <Input marginY={4} focusBorderColor="#EDF2F7" backgroundColor="#EDF2F7" placeholder="Email/Mobile" borderRadius={20} />
                            <Input marginBottom={4} focusBorderColor="#EDF2F7" backgroundColor="#EDF2F7" placeholder="Password" borderRadius={20} />
                            <Button borderRadius={20} paddingX={5} color="white" backgroundColor="black">Sign In</Button>
                        </GridItem>
                        <GridItem></GridItem>
                    </Grid>
                </GridItem>
                <GridItem colSpan={5}>
                    <Grid templateColumns="repeat(10, 1fr)" paddingY={3}>
                        <GridItem></GridItem>
                        <GridItem colSpan={6} textAlign={"center"}>
                            <Heading fontSize={"4xl"} marginBottom={5}>Join today.</Heading>
                            <Text fontSize={"2xl"}>Create new account</Text>
                            <Input marginY={4} focusBorderColor="#EDF2F7" backgroundColor="#EDF2F7" placeholder="Name" borderRadius={20} />
                            <Input marginBottom={4} focusBorderColor="#EDF2F7" backgroundColor="#EDF2F7" placeholder="Email" borderRadius={20} />
                            <Input marginBottom={4} focusBorderColor="#EDF2F7" backgroundColor="#EDF2F7" placeholder="Mobile" borderRadius={20} />
                            <Input marginBottom={4} focusBorderColor="#EDF2F7" backgroundColor="#EDF2F7" placeholder="Password" borderRadius={20} />
                            <Input marginBottom={4} focusBorderColor="#EDF2F7" backgroundColor="#EDF2F7" placeholder="Confirm Password" borderRadius={20} />
                            <Button borderRadius={20} paddingX={5} color="white" backgroundColor="black">Create account</Button>
                        </GridItem>
                        <GridItem></GridItem>
                    </Grid>
                </GridItem>
                <GridItem></GridItem>
            </Grid>
        </Box>
    )
}

export default SignInSignUp;