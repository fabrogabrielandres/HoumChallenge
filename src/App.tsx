import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter } from 'react-router-dom';
import { PublicRoutes } from './Routes/PublicRoutes';


export const App = () => (
	<BrowserRouter>
		<ChakraProvider theme={theme}>
			<ColorModeSwitcher />
			<PublicRoutes/>
		</ChakraProvider>
	</BrowserRouter>
);
