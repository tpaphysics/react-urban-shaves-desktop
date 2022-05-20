import { extendTheme } from "@chakra-ui/react";
import { colors } from "./config/colors";
import { Input } from "./components/input";
import { styles } from "./config/globalStyles";
import { fonts } from "./config/fonts";
import { Button } from "./components/button";

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
