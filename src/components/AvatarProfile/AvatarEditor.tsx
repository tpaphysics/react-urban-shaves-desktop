/* eslint-disable react/button-has-type */
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState, createRef, FormEvent, ChangeEvent, useEffect } from 'react';
import Cropper from 'react-avatar-editor';
import { ChangeHandler } from 'react-hook-form';
import { AiOutlineCamera } from 'react-icons/ai';
import { MdGraphicEq } from 'react-icons/md';
import { PuffLoader } from 'react-spinners';

import { colors } from '../../theme/config/colors';

const image = 'https://images.unsplash.com/photo-1572958731731-2b7fdb0a9818';

interface AvatarEditorProps {
  avatar: string;
}

export function AvatarEditor() {
  const [preview, setPreview] = useState(null);
  const [scale, setScale] = useState(1);
  const cropper = createRef<any>();
  const [file, setFile] = useState<any>('');
  const [loadImage, setLoadImage] = useState(true);

  const getImagePreview = () => {
    setPreview(cropper.current.getImageScaledToCanvas().toDataURL());
  };
  useEffect(() => {
    return () => {
      setLoadImage(true);
      setTimeout(
        () => setFile('https://images.unsplash.com/photo-1572958731731-2b7fdb0a9818'),
        2000
      );

      setLoadImage(false);
    };
  }, [loadImage]);

  function onTeste(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    setFile(files[0]);
    console.log(file);
  }

  return (
    <VStack>
      {loadImage ? (
        <Cropper
          ref={cropper}
          image={file}
          scale={scale}
          width={250}
          height={250}
          border={18}
          borderRadius={250}
          crossOrigin="anonymous"
        />
      ) : (
        <PuffLoader size={28} color={colors.black.background} />
      )}

      <Flex w="286px" justifyContent="space-between" paddingY={4}>
        <Button as="label" size="sm" w="160px" h="28px" rightIcon={<AiOutlineCamera />}>
          <input
            type="file"
            style={{ display: 'none' }}
            onChange={(event) => setFile(event.target?.files[0])}
          />
          Select photo
        </Button>
        <Text color="orange">{`${scale}x`}</Text>
      </Flex>
      <Slider
        size="md"
        aria-label="slider-ex-4"
        defaultValue={1}
        min={1}
        max={3}
        onChange={(val) => setScale(val)}
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
  );
}
