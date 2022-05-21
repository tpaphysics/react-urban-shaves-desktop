import { extendTheme } from "@chakra-ui/react";
import { colors } from "./config/colors";
import { Input } from "./components/input";
import { styles } from "./config/globalStyles";

import { Button } from "./components/button";
import { fonts } from "./config/fonts";

export const theme = extendTheme({
  // shadows: { outline: "0 0 0 3px var(--chakra-colors-yellow-500)" },
  styles,
  fonts,
  components: {
    Input,
    Button,
  },
  colors,
});
