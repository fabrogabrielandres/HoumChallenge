import { Flex, Img } from '@chakra-ui/react';
import logo from '../../assets/houmLogo.svg';
import React from 'react';
import { ArrowBackIcon, SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
	const navigate = useNavigate();

	return (
		<Flex justifyContent={'space-around'} mb={10} h={'15vw'} align={'center'}>
			<ArrowBackIcon h="7vw" w="7vw" onClick={() => navigate('/')} cursor="pointer" />
			<Img src={logo} h="10vw" />
			<SearchIcon h="5vw" w="5vw" onClick={() => navigate('/search')} cursor="pointer" />
		</Flex>
	);
};
