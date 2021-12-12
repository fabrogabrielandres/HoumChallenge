import React from 'react';
import { Flex } from '@chakra-ui/react';

export const PokemonScreen = () => {
	return (
		<Flex flexDir={"column"}>
			<Flex bg="red" w={"100%"} h={'30vh'} borderBottomRadius={"full"}>
                hola
            </Flex>
			<Flex  w={"100%"} h={'70vh'} >
                chau
            </Flex>
		</Flex>
	);
};
