import { Alert, AlertIcon, Box, Button, Grid, GridItem, Heading, HStack, Input, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../services/apiClient";
import { Link } from "react-router-dom";

interface User{
    name: string,
    email: string,
    mobile: number,
    password: string,
    confirmPassword: string,
}

const SignUp = () => {   
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm<User>();
    const [ signUpSuccess, setSignUpSuccess ] = useState(false);
    const [ signUpError, setSignUpError ] = useState(false);
    const [ error, setError ] = useState('');
    const [ loader, setLoader ] = useState(false);

    const onSubmit = async (data: User) => {
        setLoader(true);
        const { name, email, mobile, password, confirmPassword } = data;

        if (password == confirmPassword) {
            setSignUpSuccess(false);
            setSignUpError(false);

            await apiClient.post("/api/user", {
                name: name,
                email: email,
                mobile: mobile,
                password: password
            })
                .then((res) => {
                    localStorage.setItem("auth-token", res.data);
                    setLoader(false);
                    setSignUpSuccess(true);
                    reset();
                })
                .catch(({ response: { data } }) => {
                    setError(data);
                    setSignUpError(true);
                    setLoader(false);
                });
        }
        else {
            alert("Passwords do not match!");
        }
    }

    return (
        <Box padding={5}>
            <Grid templateColumns="repeat(12, 1fr)" gap={2}>
                <GridItem colSpan={3}></GridItem>
                <GridItem colSpan={6}>
                    <Heading fontSize={"7xl"} color="#D69E2E">Connectify</Heading>
                    <Grid templateColumns="repeat(10, 1fr)" paddingY={3}>
                        <GridItem></GridItem>
                        <GridItem colSpan={6}>
                            {signUpSuccess &&
                                <Alert status="success" marginBottom={3}>
                                    <AlertIcon />
                                    This is an alert message!
                                </Alert>
                            }
                            {signUpError &&
                                <Alert status="error" marginBottom={3}>
                                    <AlertIcon />
                                    {error}
                                </Alert>
                            }
                            <Heading fontSize={"4xl"} marginBottom={5}>Join today.</Heading>
                            <Text fontSize={"2xl"}>Create new account</Text>
                            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                                <Input
                                    {...register("name",
                                        {
                                            required: "Name is required",
                                            minLength: { value: 4, message: "Name must be atleast 4 characters long." }
                                        })
                                    }
                                    marginTop={4}
                                    focusBorderColor="#EDF2F7"
                                    backgroundColor="#EDF2F7"
                                    placeholder="Name"
                                    borderRadius={20}
                                />
                                {errors.name && 
                                    <Text color={"red"}>{errors.name.message}</Text>
                                }
                                <Input
                                    {...register("email",
                                        {
                                            required: "Email is required.",
                                            minLength: { value: 8, message: "Email must be atleast 8 characters long."}
                                        })
                                    }
                                    marginTop={4}
                                    focusBorderColor="#EDF2F7"
                                    backgroundColor="#EDF2F7"
                                    placeholder="Email"
                                    borderRadius={20}
                                />
                                { errors.email && 
                                    <Text color={"red"}>{errors.email.message}</Text>
                                }
                                <Input
                                    {...register("mobile",
                                        {
                                            required: "Mobile No. is required.",
                                            minLength: { value: 10, message: "Mobile No. must be 10 digits long." },
                                            maxLength: { value: 10, message: "Mobile No. should not greater than 10 digits."}
                                        }
                                     )}
                                    marginTop={4}
                                    focusBorderColor="#EDF2F7"
                                    backgroundColor="#EDF2F7"
                                    placeholder="Mobile"
                                    borderRadius={20}
                                />
                                {errors.mobile && 
                                    <Text color={"red"}>{errors.mobile.message}</Text>
                                }
                                <Input
                                    {...register("password",
                                        {
                                            required: "Password is required.",
                                            minLength: { value: 8, message: "Password must be atleast 8 characters long."}
                                        })
                                    }
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
                                <Input
                                    {...register("confirmPassword",
                                        {
                                            required: "Confirm password is required.",
                                            minLength: { value: 8, message: "Confirm must be atleast 8 characters long."}
                                        })
                                    }
                                    type="password"
                                    marginTop={4}
                                    focusBorderColor="#EDF2F7"
                                    backgroundColor="#EDF2F7"
                                    placeholder="Confirm Password"
                                    borderRadius={20}
                                />
                                {errors.confirmPassword && 
                                    <Text color={"red"}>{errors.confirmPassword.message}</Text>
                                }
                                <Button
                                    isLoading={loader}
                                    type="submit"
                                    borderRadius={20}
                                    marginTop={4}
                                    paddingX={5}
                                    color="white"
                                    backgroundColor="black">
                                    Create account
                                </Button>
                            </form>
                            <HStack marginTop={5} fontSize={"lg"}>
                                <Text>Already user?</Text>
                                <Link to={"/signin"}>Login here.</Link>
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

export default SignUp;