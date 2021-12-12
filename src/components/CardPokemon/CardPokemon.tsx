import React from 'react';
import { Img, Text, Box } from '@chakra-ui/react';
import { Pokemon } from '../../interfaces/interface2';
import pokebola from '../../assets/pokebola.png';
import { useNavigate } from 'react-router-dom';
import './styles.css';
interface Props {
	pokemon: Pokemon;
}

export const CardPokemon = ({ pokemon }: Props) => {
	const { id, imageUrl, name } = pokemon;
	let navigate = useNavigate();

	return (
		<Box
			className='container'
			boxShadow="2xl"
			mt={50}
			onClick={() => {
				navigate(`/pokemon/${id}`);
			}}
		>
			<Text fontSize="2.5em" mt={'50%'} textAlign={'center'}>
				{name}
			</Text>
			<Text fontSize="2.5em" textAlign={'center'}>
				#{id}
			</Text>
			<Box position={'absolute'} w={'30%'} left={0} bottom={0}>
				<Img src={pokebola} objectFit={'cover'} bg={'white'} cursor={'pointer'} className="efecto"/>
			</Box>
			<Box position={'absolute'} w={'70%'} right={0} top={'-15%'}>
				<Img src={imageUrl} objectFit={'cover'}/>
			</Box>
		</Box>
	);
};
