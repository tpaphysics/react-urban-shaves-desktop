import { Icon, IconProps } from '@chakra-ui/react';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../../hooks/Auth';

export default function SignOutButton({ ...props }: IconProps) {
  const { signOut } = useAuth();
  const navigation = useNavigate();
  return (
    <Icon
      {...props}
      as={BsBoxArrowInRight}
      color="orangeFontHard"
      fontSize="24"
      onClick={async () => {
        signOut();
        navigation('/', { replace: true });
      }}
      cursor="pointer"
      _hover={{
        color: 'orange',
      }}
    />
  );
}
