import { VStack } from '@chakra-ui/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import BarberButton from '../components/Basic/BarberButton';
import { BarberInput } from '../components/Basic/Input';
import { LoginDto } from '../dto/login.dto';
import useAuth from '../hooks/Auth';

export function LoginForm() {
  const resolver = classValidatorResolver(LoginDto);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginDto>({ resolver });

  function onSubmit(data: LoginDto) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        signIn(data)
          .then(() => navigate('dashboard'))
          .catch((err) => console.log(err));
        resolve();
      }, 3000);
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <BarberInput
          errors={errors}
          id="email"
          register={register}
          iconType="user"
          placeholder="E-mail"
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
        Sigin
      </BarberButton>
    </form>
  );
}
