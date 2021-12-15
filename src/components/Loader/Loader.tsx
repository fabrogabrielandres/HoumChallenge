import { Flex, Spinner, Text } from '@chakra-ui/react';
import React from 'react';

export const Loader = () => {
	return (
			<Flex justify={'center'} align={'center'} h={'100vh'} > 
				<Text mr={10} color={"#ff452b"}>Loading...</Text>
				<Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="#ff452b" size="xl" />
			</Flex>
	);
};
