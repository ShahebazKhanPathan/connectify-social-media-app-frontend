import { Alert, AlertIcon, Box, Button, Grid, GridItem, Heading, HStack, Input, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../services/apiClient";
import { Link } from "react-router-dom";

interface User{
    id: string,
    password: string
}

const SignIn = () => {   
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm<User>();
    const [ errorAlert, setErrorAlert ] = useState("");
    const [ loader, setLoader ] = useState(false);

    const onSubmit = async (data: User) => {

        setLoader(true);
        setErrorAlert("");
        const { id, password } = data;

        await apiClient.post("/api/user/signin", { id: id, password: password })
            .then((res) => {
                localStorage.setItem("auth-token", res.data);
                setLoader(false);
                reset();
            })
            .catch(({ message }) => {
                setErrorAlert(message);
                setLoader(false);
            });
    }

    return (
        <Box padding={5}>
            <Grid templateColumns="repeat(12, 1fr)" gap={2}>
                <GridItem colSpan={3}></GridItem>
                <GridItem colSpan={6}>
                    {errorAlert=="" ? "" : 
                        <Alert status="error" marginBottom={3}>
                            <AlertIcon />
                            {errorAlert}
                        </Alert>
                    }
                    <Heading fontSize={"7xl"} color="#D69E2E">Connectify</Heading>
                    <Text fontSize={"xl"} marginY={5}>
                        Stay connected with the world in real-time.
                        Share your thoughts, follow trends, and engage with a vibrant community.
                        Connectify brings you the best of social media, powered by cutting-edge technology for a seamless experience.</Text>
                    <Grid templateColumns="repeat(10, 1fr)" paddingY={3}>
                        <GridItem></GridItem>
                        <GridItem colSpan={6}>
                            <Text fontSize={"2xl"}>Sign In</Text>
                            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                                <Input
                                    {...register("id",
                                        {
                                            required: "Email or mobile is required."
                                        })
                                    }
                                    marginTop={4}
                                    focusBorderColor="#EDF2F7"
                                    backgroundColor="#EDF2F7"
                                    placeholder="Email/Mobile"
                                    borderRadius={20}
                                />
                                {errors.id && 
                                    <Text color={"red"}>{errors.id.message}</Text>
                                }
                                <Input
                                    {...register("password",
                                        {
                                            required: "Password is required."
                                        }
                                    )}
                                    type="password"
                                    marginTop={4}
                                    focusBorderColor="#EDF2F7"
                                    backgroundColor="#EDF2F7"
                                    placeholder="Password"
                                    borderRadius={20}
                                />
                                {errors.password && 
                                    <Text color={"red"}>{errors.password.message}</Text>
                                }
                                <Button
                                    isLoading={loader}
                                    type="submit"
                                    marginTop={4}
                                    borderRadius={20}
                                    paddingX={5}
                                    color="white"
                                    backgroundColor="black">Sign In
                                </Button>
                            </form>
                            <HStack marginTop={5} fontSize={"lg"}>
                                <Text>New user?</Text>
                                <Link to={"/signup"}>Register here.</Link>
                            </HStack>
                        </GridItem>
                        <GridItem></GridItem>
                    </Grid>
                </GridItem>
                <GridItem colSpan={3}></GridItem>
            </Grid>
        </Box>
    )
}

export default SignIn;