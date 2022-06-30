import {
  Avatar,
  Flex,
  Heading,
  AvatarBadge,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineCamera } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BarberText } from "../components/Typograph/BarberText";
import ProfileForm from "../forms/ProfileForm";

export default function Profile() {
  /*
  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }, []); */

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
        <ProfileForm />
      </Flex>
    </Flex>
  );
}
