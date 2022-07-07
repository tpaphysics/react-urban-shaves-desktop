import { VStack } from '@chakra-ui/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useForm } from 'react-hook-form';

import BarberButton from '../components/Basic/BarberButton';
import { BarberInput } from '../components/Basic/Input';
import { RegisterDto } from '../dto/register.dto';

export default function RegisterForm() {
  const resolver = classValidatorResolver(RegisterDto);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterDto>({ resolver });

  function onSubmit(data: RegisterDto) {
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
        <BarberInput
          id="password"
          register={register}
          errors={errors}
          iconType="lock"
          placeholder="Password"
          isPassword
        />
      </VStack>
      <BarberButton mt="6" w="100%" type="submit" isLoading={isSubmitting}>
        Register
      </BarberButton>
    </form>
  );
}
