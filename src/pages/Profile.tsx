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
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm } from "react-hook-form";
import { AiOutlineArrowLeft, AiOutlineCamera } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BarberInput } from "../components/Basic/Input";
import { BarberText } from "../components/Typograph/BarberText";
import { ProfileDto } from "../dto/profile.dto";

export default function Profile() {
  const resolver = classValidatorResolver(ProfileDto);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ProfileDto>({ resolver });

  function onSubmit(data: ProfileDto) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line no-restricted-syntax

        const { name, ...rest } = data;
        console.log(rest);
        resolve();
      }, 3000);
    });
  }

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <BarberInput
              id="name"
              type="text"
              register={register}
              errors={errors}
              iconType="user"
              placeholder="Name"
              w="340px"
            />
            <BarberInput
              id="email"
              type="email"
              register={register}
              errors={errors}
              iconType="email"
              placeholder="E-mail"
              w="340px"
            />
          </VStack>
          <VStack mt="6">
            <BarberInput
              id="password"
              register={register}
              errors={errors}
              iconType="lock"
              placeholder="Password"
              isPassword
            />
            <BarberInput
              id="newPassword"
              register={register}
              errors={errors}
              iconType="lock"
              placeholder="New password"
              isPassword
            />
            <BarberInput
              id="confirmNewPassword"
              register={register}
              errors={errors}
              iconType="lock"
              placeholder="Confirm new password"
              isPassword
            />
          </VStack>
          <Button mt="6" w="100%" type="submit" isLoading={isSubmitting}>
            Confirm changes
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}
