import { VStack } from "@chakra-ui/react";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm } from "react-hook-form";
import BarberButton from "../components/Basic/BarberButton";
import { BarberInput } from "../components/Basic/Input";
import { ProfileDto } from "../dto/profile.dto";

export default function ProfileForm() {
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
        console.log(data);
        resolve();
      }, 3000);
    });
  }

  return (
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
      <BarberButton mt="6" w="100%" type="submit" isLoading={isSubmitting}>
        Confirm changes
      </BarberButton>
    </form>
  );
}
