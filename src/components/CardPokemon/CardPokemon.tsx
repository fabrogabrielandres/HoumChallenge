import React, { useState } from 'react';
import { Img, Text, Box } from '@chakra-ui/react';
import { Pokemon } from '../../interfaces/interface';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { ColorExtractor } from 'react-color-extractor';
import pokebola from '../../assets/pokebola.png';
interface Props {
	pokemon: Pokemon;
}
export const CardPokemon = ({ pokemon }: Props) => {
	const [ palettColors, setPalettColors ] = useState([]);
	const { id, imageUrl, name } = pokemon;
	let navigate = useNavigate();

	const getColors = (colors: []) => {
		setPalettColors(colors);
	};

	return (
		<Box
			className="container"
			boxShadow="2xl"
			mt={50}
			transition={'all 0.2s ease-in-out'}
			bgGradient={`linear(to-r,${palettColors[0]} ,${palettColors[1]})`}
			_hover={{
				bgGradient: `linear(to-l,${palettColors[4]},${palettColors[2]})`,
				transform: 'scale(1.09)'
			}}
		>
			<Text fontSize="2em" mt={'50%'} textAlign={'center'} color={'#ff452b'} textTransform={'uppercase'}>
				{name}
			</Text>
			<Text fontSize="1.5em" textAlign={'center'} color={'#ff452b'}>
				#{id}
			</Text>
			<Box
				position={'absolute'}
				w={'20%'}
				left={0}
				bottom={0}
				onClick={() => {
					navigate(`/pokemon/${id}`);
				}}
			>
				<Img src={pokebola} objectFit={'cover'} bg={'white'} cursor={'pointer'} className="efecto" />
			</Box>
			<Box position={'absolute'} w={'70%'} right={0} top={'-15%'}>
				<Img src={imageUrl} objectFit={'cover'} />
			</Box>
			<ColorExtractor src={imageUrl} getColors={(colors: any) => getColors(colors)} />
		</Box>
	);
};
