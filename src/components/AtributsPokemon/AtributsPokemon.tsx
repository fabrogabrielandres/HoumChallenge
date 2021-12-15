import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { Atributs } from '../../interfaces/interface';
import pokebola from '../../assets/pokebola.png';
import './styles.css';
import LazyLoad from 'react-lazyload';

interface Props {
	atributs: Atributs;
	id?: string;
}

export const AtributsPokemon = ({ atributs, id }: Props) => {
	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

	return (
		<Box>
			<Box h={'40vw'}>
				<Flex flexDir={'column'} w={'100%'} position={'relative'}>
					<Img
						src={pokebola}
						w={'35%'}
						margin={'0 auto'}
						borderRadius={'full'}
						className="pokebola"
						position={'absolute'}
					/>
					<LazyLoad height="100%">
						<Img src={imageUrl} w={'30%'} className="img" position={'absolute'} />
					</LazyLoad>
				</Flex>
			</Box>
			<Box ml="20px" mt="20px">
				<Text fontSize={'x-large'} fontWeight={'bold'} display={'inline-block'}>
					Types :
				</Text>
				{atributs.types.map((elemet, idx) => (
					<Text fontSize={'x-large'} fontWeight={'bold'} key={idx} ml={2} display={'inline-block'}>
						{elemet.type.name}
					</Text>
				))}
				<Text mt="20px" fontSize={'x-large'} fontWeight={'bold'}>
					Weight :{atributs.weight}
				</Text>
				<Flex mt="20px" justifyContent={'space-between'} flexWrap={'wrap'} align={'center'}>
					<Text fontSize={'x-large'} fontWeight={'bold'}>
						Sprites:
					</Text>
					<Img h={'10vw'} className="sprites" src={atributs.sprites.front_default} />
					<Img h={'10vw'} className="sprites" src={atributs.sprites.back_default} />
					<Img h={'10vw'} className="sprites" src={atributs.sprites.back_shiny} />
					<Img h={'10vw'} className="sprites" src={atributs.sprites.front_shiny} />
				</Flex>
			</Box>
		</Box>
	);
};
