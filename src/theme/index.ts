import { extendTheme } from '@chakra-ui/react';

import { Button } from './components/button';
import { Input } from './components/input';
import { colors } from './config/colors';
import { fonts } from './config/fonts';
import { styles } from './config/globalStyles';

export const theme = extendTheme({
  // shadows: { outline: "0 0 0 3px var(--chakra-colors-yellow-500)" },
  shadows: { outline: '0 0 0 2px var(--chakra-colors-orangeFontHard)' },
  styles,
  fonts,
  components: {
    Input,
    Button,
  },
  colors,
});
