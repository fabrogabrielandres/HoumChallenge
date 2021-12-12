import React from 'react';
import { Img, Text, Flex, Box } from '@chakra-ui/react';
import { Pokemon } from '../../interfaces/interface2';
import pokebola from '../../assets/pokebola.png';
interface Props {
	pokemon: Pokemon;
}

export const CardPokemon = ({ pokemon }: Props) => {
	const { id, imageUrl, name, color } = pokemon;

	return (
		<Box minW={'350px'} height={'350px'} position={'relative'} border={'solid 2px red'} mt={50}>
			<Text>{name}</Text>
			<Text>#{id}</Text>
			<Box position={'absolute'} w={'30%'} left={0} bottom={0}>
				<Img src={pokebola} objectFit={'cover'} bg={'white'} />
			</Box>
			<Box position={'absolute'} w={'50%'} right={0} top={'-20%'}>
				<Img src={imageUrl} objectFit={'cover'} />
			</Box>
		</Box>
	);
};
