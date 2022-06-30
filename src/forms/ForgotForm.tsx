import { VStack, Button } from "@chakra-ui/react";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm } from "react-hook-form";
import { BarberInput } from "../components/Basic/Input";
import { ForgotDto } from "../dto/forgot.dto";

export default function ForgotForm() {
  const resolver = classValidatorResolver(ForgotDto);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ForgotDto>({ resolver });

  function onSubmit(data: ForgotDto) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve();
      }, 3000);
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <BarberInput
          id="email"
          type="email"
          errors={errors}
          register={register}
          iconType="email"
          placeholder="E-mail"
          w="340px"
        />
      </VStack>
      <Button mt="6" w="100%" type="submit" isLoading={isSubmitting}>
        Send email
      </Button>
    </form>
  );
}
