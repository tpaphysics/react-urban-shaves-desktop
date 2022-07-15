import {
  Flex,
  Avatar,
  AvatarBadge,
  Icon,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  VStack,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import Cropper from 'react-avatar-editor';
import { AiOutlineCamera } from 'react-icons/ai';
import { MdGraphicEq } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';

import useAuth from '../../hooks/Auth';
import profileService from '../../services/profile.service';
import AvatarEditorService from './avatar.editor.service';

interface PictureProps {
  img: string | File;
  zoom: number;
  urlCroppedImg: string;
  fileType: string;
}

const { updateStorageUserAndSetUser } = profileService;

export default function AvatarEditorProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { avatarUpdate, imageValidator, urlToFile } = AvatarEditorService;

  const { currentUser: user, setUser } = useAuth();
  const { avatar, id } = user;

  let editor = {} as any;
  const [picture, setPicture] = useState<PictureProps>({
    img: '',
    zoom: 1,
    urlCroppedImg: avatar,
    fileType: '',
  } as PictureProps);

  const handleFileChange = useCallback((event: Event) => {
    try {
      const target = event.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      if (file) {
        imageValidator(file);
        const url = URL.createObjectURL(file);
        setPicture({
          ...picture,
          img: url,
          fileType: file.type,
        });
      }
      onOpen();
    } catch (err: any) {
      toast.warn(err.message);
      onClose();
    }
  }, []);

  function handleSlider(value: number) {
    setPicture({
      ...picture,
      zoom: value,
    });
  }

  async function handleSave() {
    if (editor) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const urlCroppedImg = canvasScaled.toDataURL();
      const croppedFile = await urlToFile(urlCroppedImg, 'avatarResize', picture.fileType);
      const res = await avatarUpdate(croppedFile, id as string);
      console.log(res);
      updateStorageUserAndSetUser(setUser, res.data);

      setPicture({
        ...picture,
        zoom: 1,
        img: '',
        urlCroppedImg,
      });
      onClose();
    }
  }

  function handleCancel() {
    setPicture({
      ...picture,
      urlCroppedImg: avatar as string,
      zoom: 1,
    });
    onClose();
  }
  function setEditorRef(ed: any) {
    editor = ed;
  }

  return (
    <>
      <Flex w="100%" justify="center" mb="8">
        <Avatar
          size="2xl"
          position="relative"
          name="Richard"
          src={picture.urlCroppedImg}
          // filter="grayscale(75)"
        >
          <AvatarBadge as="label" boxSize="0.9em" bg="orange" border="none" cursor="pointer">
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange as any}
              accept="image/*"
            />

            <Icon as={AiOutlineCamera} w="6" color="black.background" />
          </AvatarBadge>
        </Avatar>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black.shape">
          <ModalHeader color="orangeFont">Select your image</ModalHeader>
          <ModalCloseButton color="black.inputs" />
          <ModalBody>
            <VStack>
              <Cropper
                ref={setEditorRef}
                image={picture.img}
                scale={picture.zoom}
                width={250}
                height={250}
                border={24}
                borderRadius={250}
                crossOrigin="anonymous"
              />
              <Slider
                size="md"
                aria-label="slider-ex-4"
                defaultValue={1}
                min={1}
                max={3}
                onChange={handleSlider}
                step={0.01}
                w="286px">
                <SliderTrack bg="black.inputs">
                  <SliderFilledTrack bg="orange" />
                </SliderTrack>
                <SliderThumb boxSize={6} bg="orange">
                  <Box color="black.background" as={MdGraphicEq} />
                </SliderThumb>
              </Slider>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              size="md"
              variant="outline"
              color="orange"
              borderColor="orange"
              mr={3}
              onClick={handleCancel}
              _hover={{ bg: 'orange', color: 'black.shape' }}>
              Close
            </Button>
            <Button size="md" onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ToastContainer theme="colored" autoClose={3000} />
    </>
  );
}
