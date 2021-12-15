import React, { useState } from 'react';
import { Pokemon } from '../../interfaces/interface';
import { useNavigate } from 'react-router-dom';
import { ColorExtractor } from 'react-color-extractor';
import pokebola from '../../assets/pokebola.png';
import { Img } from '@chakra-ui/react';
import { Center, Box, Avatar, Stack, Heading, Text, useColorModeValue, Badge } from '@chakra-ui/react';
import './styles.css';

interface Props {
	pokemon: Pokemon;
}

export const CardPokemon = ({ pokemon }: Props) => {
	const [ palettColors, setPalettColors ] = useState([]);
	const { id, imageUrl, name } = pokemon;
	let navigate = useNavigate();
	let sprite = [ '', 'back', 'back/shiny', 'shiny' ];


	const getColors = (colors: []) => {
		setPalettColors(colors);
	};

	return (
		<Center py={6} mt={20} mr={10}>
			<Box
				maxW={'320px'}
				w={'full'}
				bgGradient={`linear(to-r,${palettColors[0]} ,${palettColors[1]})`}
				_hover={{
					bgGradient: `linear(to-l,${palettColors[4]},${palettColors[2]})`,
					transform: 'scale(1.09)'
				}}
				boxShadow={'2xl'}
				rounded={'lg'}
				p={6}
				textAlign={'center'}
			>
				<Box position={'relative'}>
					<Avatar
						top={-20}
						right={-10}
						size={'xl'}
						src={imageUrl}
						alt={'Avatar Alt'}
						mb={4}
						position={'absolute'}
						_after={{
							content: '""',
							w: 4,
							h: 4,
							bg: 'green.300',
							border: '2px solid white',
							rounded: 'full',
							pos: 'absolute',
							bottom: 0,
							right: 3
						}}
					/>
				</Box>
				<Heading fontSize={'2xl'} fontFamily={'body'} color="#ff452b">
					{name.toUpperCase()}
				</Heading>
				<Text mt={10} fontWeight={600} color="#ff452b" mb={4}>
					{`ID: #${id}`}
				</Text>
				<Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
					{sprite.map((item, idx) => {
						return (
							<Img
								key={idx}
								w={'25%'}
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item}/${id}.png`}
							/>
						);
					})}
				</Stack>

				<Stack mt={10} direction={'row'} spacing={4} justifyContent="center">
					<Img
						src={pokebola}
						w={'20%'}
						objectFit={'cover'}
						className="efecto"
						onClick={() => {
							navigate(`/pokemon/${id}`);
						}}
						cursor="pointer"
					/>
				</Stack>
			</Box>
			<ColorExtractor src={imageUrl} getColors={(colors: any) => getColors(colors)} />
		</Center>
	);
};
