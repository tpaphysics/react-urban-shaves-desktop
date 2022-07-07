import { ComponentStyleConfig } from '@chakra-ui/react';

import { colors } from '../config/colors';

const { orange, gray, white, black } = colors;

export const Input: ComponentStyleConfig = {
  variants: {
    barber: {
      field: {
        border: 'none',
        borderColor: 'none',
        color: white,
        bg: black.inputs,
        _placeholder: {
          color: gray.hard,
        },
        _focus: {
          border: '2px solid',
          borderColor: 'orange',
        },
        _autofill: {
          bg: orange,
          textFillSize: 'md',
          textFillColor: '#EEEEF2',
          boxShadow: '0 0 0px 1000px #181B23 inset',
          transition: 'background-color 5000s ease-in-out 0s',
        },
      },
    },
  },

  defaultProps: {
    variant: 'barber',
    size: 'lg',
  },
};
