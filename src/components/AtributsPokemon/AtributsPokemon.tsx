import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { Atributs } from '../../interfaces/interface2';
import pokebola from '../../assets/pokebola.png';
import pokebolab from '../../assets/pokebola-blanca.png';
import './styles.css';

interface Props {
	atributs: Atributs;
	id?: string;
}

export const AtributsPokemon = ({ atributs, id }: Props) => {
	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
	console.log(atributs.name);

	return (
		<Box>
			<Flex flexDir={'column'} w={'100%'}>
				<Img
					src={pokebola}
					w={'35%'}
					margin={'0 auto'}
					borderRadius={'full'}
					className="pokebola"
					position={'absolute'}
				/>
				<Img src={imageUrl} w={'30%'} className="img" position={'absolute'}/>
			</Flex>
            
		</Box>
	);
};
