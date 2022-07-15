import { VStack } from '@chakra-ui/react';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import BarberButton from '../components/Basic/BarberButton';
import { BarberInput } from '../components/Basic/Input';
// eslint-disable-next-line import/order
import { ProfileDto } from '../dto/profile.dto';

import 'react-toastify/dist/ReactToastify.css';
import { User } from '../entities/user';
import useAuth from '../hooks/Auth';
import profileService from '../services/profile.service';

const { updateStorageUserAndSetUser, updateUser } = profileService;

export default function ProfileForm() {
  const { currentUser, setUser } = useAuth();
  const navigate = useNavigate();
  const { name, email, id } = currentUser;
  const resolver = classValidatorResolver(ProfileDto);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ProfileDto>({ resolver });

  function onSubmit(data: ProfileDto) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        updateUser(data, id as string)
          .then((response) => {
            updateStorageUserAndSetUser(setUser, response.data as User);
            toast.success('User updated successfully!');
            setTimeout(() => navigate('/dashboard', { replace: true }), 4000);
          })
          .catch((err) => toast.error(err.response.data.message));
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
          defaultValue={name}
        />
        <BarberInput
          id="email"
          type="email"
          register={register}
          errors={errors}
          iconType="email"
          placeholder="E-mail"
          w="340px"
          defaultValue={email}
          isDisabled
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
      </VStack>
      <BarberButton mt="6" w="100%" type="submit" isLoading={isSubmitting}>
        Confirm changes
      </BarberButton>
      <ToastContainer theme="colored" autoClose={3000} />
    </form>
  );
}
