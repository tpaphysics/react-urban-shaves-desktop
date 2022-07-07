import { Flex, Heading, IconButton } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { AvatarProfile } from '../components/Modal/AvatarProfile';
import { BarberText } from '../components/Typograph/BarberText';
import ProfileForm from '../forms/ProfileForm';

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
        h={{ base: '100px', lg: '144px' }}
        px={{ lg: '40', base: '4' }}
        w="100%">
        <Link to="/dashboard">
          <IconButton
            as={AiOutlineArrowLeft}
            bg="transparent"
            _hover={{
              bg: 'transparent',
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
        maxW="340px">
        <AvatarProfile />

        <BarberText size="lg" fontWeight="600" mb="6" color="orangeFont">
          My profile
        </BarberText>
        <ProfileForm />
      </Flex>
    </Flex>
  );
}
