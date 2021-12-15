import { Flex, Img, Text } from '@chakra-ui/react';
import logo from '../../assets/houmLogo.svg';
import React from 'react';
import { ArrowBackIcon, SearchIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';

export const NavBar = () => {
	const navigate = useNavigate();
	let params = useParams();
	return (
		<Flex justifyContent={'space-around'} mb={10} h={'15vw'} align={'center'}>
			{params.id !== '' && <ArrowBackIcon h="7vw" w="7vw" onClick={() => navigate('/')} />}
			<Img src={logo} h="10vw" />
			{params.id !== '' && <SearchIcon h="5vw" w="5vw" onClick={() => navigate('/search')} />}
		</Flex>
	);
};
