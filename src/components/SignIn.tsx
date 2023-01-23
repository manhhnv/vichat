import React, { useRef } from "react";
import { Input, Button, useToast } from "@chakra-ui/react";
import { signIn } from "../services/auth";
import { useSetRecoilState } from "recoil";
import { authState } from "../utils/atom";

const SignIn = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const toast = useToast();
  const setAuthState = useSetRecoilState(authState);
  const handleSignIn = () => {
    // validate username and password
    if (!usernameRef.current?.value || !passwordRef.current?.value) {
      toast({
        title: "Sign in error",
        description: "Username and password was incorrect",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    let username = usernameRef.current?.value?.trim();
    let password = passwordRef.current?.value?.trim();
    if (!username || !password) {
      toast({
        title: "Sign in error",
        description: "Username and password was incorrect",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      return;
    } else {
      const authUser = signIn(username, password);
      if (!authUser) {
        toast({
          title: "Sign in error",
          description: "Username and password was incorrect",
          status: "error",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
        return;
      } else {
        setAuthState(authUser);
      }
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSignIn}>
        <Input
          ref={usernameRef}
          type={"text"}
          placeholder={"Username"}
          w={"100%"}
          defaultValue="manhnv"
        />
        <Input
          ref={passwordRef}
          type={"password"}
          placeholder={"Password"}
          w={"100%"}
          my="5"
          defaultValue="manhnv"
        />
        <Button
          type="submit"
          colorScheme={"messenger"}
          variant={"solid"}
        >
          Sign in
        </Button>
      </form>
    </React.Fragment>
  );
};

export default SignIn;
