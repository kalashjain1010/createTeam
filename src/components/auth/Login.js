import React from 'react'
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { REGISTER } from 'lib/routes';
import { Link as RouterLink } from 'react-router-dom';
function Login() {
  // // const { login, isLoading } = useLogin();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Log In
        </Heading>

        <form onSubmit={false}>
          <FormControl isInvalid={true} py="2">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="user@email.com"
              // {...register("email", emailValidate)}
            />
            <FormErrorMessage>
              
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={false} py="2">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="password123"
              // {...register("password", passwordValidate)}
            />
            <FormErrorMessage>
              {/* {errors.password && errors.password.message} */}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt="4"
            type="submit"
            colorScheme="teal"
            size="md"
            w="full"
            isLoading={true}
            loadingText="Logging In"
          >
            Log In
          </Button>
        </form>

       <Text fontSize="xlg" align="center" mt="6">
          Don't have an account?{" "}
          <Link
            as={RouterLink}
            to={REGISTER}
            color="teal.800"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "teal.100" }}
          >
            Register
          </Link>{" "}
          instead!
        </Text> 
      </Box>
    </Center>
  )
}

export default Login
