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
import { useState } from 'react';
import Cropper from 'react-avatar-editor';
import { AiOutlineCamera } from 'react-icons/ai';
import { MdGraphicEq } from 'react-icons/md';

import useAuth from '../../hooks/Auth';

interface PictureProps {
  img: string | File;
  zoom: number;
  croppedImg: string;
}

export default function AvatarEditorProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { currentUser: user } = useAuth();
  const { avatar } = user;

  let editor = {} as any;
  const [picture, setPicture] = useState<PictureProps>({
    img: '',
    zoom: 1,
    croppedImg: avatar,
  } as PictureProps);

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const url = URL.createObjectURL(file);
    setPicture({
      ...picture,
      img: url,
    });
    // eslint-disable-next-line no-unused-expressions
    onOpen();
  }
  function handleSlider(value: number) {
    setPicture({
      ...picture,
      zoom: value,
    });
  }

  function handleSave() {
    if (editor) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();

      setPicture({
        zoom: 1,
        img: '',
        croppedImg,
      });
      onClose();
    }
  }

  function handleCancel() {
    setPicture({
      ...picture,
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
          src={picture.croppedImg}
          // filter="grayscale(75)"
        >
          <AvatarBadge as="label" boxSize="0.9em" bg="orange" border="none" cursor="pointer">
            <input type="file" style={{ display: 'none' }} onChange={handleFileChange as any} />

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
                border={18}
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
    </>
  );
}
