import {
  Avatar,
  Flex,
  Heading,
  VStack,
  Button,
  AvatarBadge,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineCamera } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BarberInput } from "../components/Basic/Input";
import { BarberText } from "../components/Typograph/BarberText";

export default function Profile() {
  return (
    <Flex flexDir="column" justify="center" align="center">
      <Heading
        display="flex"
        alignItems="center"
        bg="black.inputs"
        h={{ base: "100px", lg: "144px" }}
        px={{ lg: "40", base: "4" }}
        w="100%"
      >
        <Link to="/dashboard">
          <IconButton
            as={AiOutlineArrowLeft}
            bg="transparent"
            _hover={{
              bg: "transparent",
            }}
            color="orangeFontHard"
            size="xs"
            aria-label="Arrow Left"
            cursor="pointer"
          />
        </Link>
      </Heading>

      <Flex
        position="relative"
        top="-60px"
        flexDir="column"
        align="left"
        justify="center"
        w="100%"
        maxW="340px"
      >
        <Flex w="100%" justify="center" mb="8">
          <Avatar
            size="2xl"
            position="relative"
            name="Richard"
            src="https://i.pravatar.cc/400?img=11"
            // filter="grayscale(75)"
          >
            <AvatarBadge
              boxSize="0.9em"
              bg="orange"
              border="none"
              cursor="pointer"
              children={
                <Icon as={AiOutlineCamera} w="6" color="black.background" />
              }
            />
          </Avatar>
        </Flex>

        <BarberText size="lg" fontWeight="600" mb="6" color="orangeFont">
          My profile
        </BarberText>
        <VStack>
          <BarberInput iconType="user" placeholder="Name" w="340px" />
          <BarberInput iconType="email" placeholder="E-mail" w="340px" />
        </VStack>
        <VStack mt="6">
          <BarberInput iconType="lock" placeholder="Password" isPassword />
          <BarberInput iconType="lock" placeholder="New password" isPassword />
          <BarberInput
            iconType="lock"
            placeholder="Confirm new password"
            isPassword
          />
        </VStack>
        <Button mt="6" w="100%">
          Confirm changes
        </Button>
      </Flex>
    </Flex>
  );
}
