import * as React from 'react';
import { ChakraProvider} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter } from 'react-router-dom';
import { PublicRoutes } from './Routes/PublicRoutes';
import theme from './theme';


export const App = () => (
	<BrowserRouter>
		<ChakraProvider theme={theme}>
			<ColorModeSwitcher mt={2}/>
			<PublicRoutes/>
		</ChakraProvider>
	</BrowserRouter>
);
