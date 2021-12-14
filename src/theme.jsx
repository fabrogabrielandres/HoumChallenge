import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#fef1f0', '#141214')(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: props => ({
      dialog: {
        bg: mode('white', '#141214')(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
});

export default theme;