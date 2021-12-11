import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HomeScreen } from './screen/HomeScreen';


export const App = () => (
	<ChakraProvider theme={theme}>
		<ColorModeSwitcher  />
		<HomeScreen/>
	</ChakraProvider>
);
