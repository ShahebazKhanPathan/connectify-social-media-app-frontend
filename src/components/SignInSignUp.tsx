import { Alert, AlertIcon, Box, Button, Grid, GridItem, Heading, Input, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useForm } from "react-hook-form";

interface User{
    name: string,
    email: string,
    mobile: number,
    password: string,
    confirmPassword: string
}

const SignInSignUp = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm<User>();
    const [ signUpAlert, setSignUpAlert ] = useState(false);
    const [ loader, setLoader ] = useState(false);

    const onSubmit = (data: User) => {
        setLoader(true);

        // api call
        setTimeout(() => { 
            setLoader(false);
            setSignUpAlert(true);
            console.log(data);
        }, 2000);
    }

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
                        <GridItem colSpan={6}>
                            {signUpAlert &&
                                <Alert status="success" marginBottom={3}>
                                    <AlertIcon />
                                    This is an alert message!
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