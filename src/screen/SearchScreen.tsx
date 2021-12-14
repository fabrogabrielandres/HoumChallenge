import { Flex, Text, InputGroup, InputLeftElement, Input, Box, Img } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { useEffect } from 'react';
import { Loader } from '../components/Loader/Loader';
import { CardPokemon } from '../components/CardPokemon/CardPokemon';

export const SearchScreen = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { pokemonList, loadPokemons, isFetching } = usePokemonSearch();

	useEffect(() => {
		loadPokemons();
	}, []);

	return isFetching ? (
		<Loader />
	) : (
		<Flex flexWrap="wrap" justifyContent="center">
			<Text mt={10} display="inline" fontSize="x-large" color="#ff452b">
				Search Pokemon by Id or Name...
			</Text>
			<Box w={'100%'} mt={10}>
				<InputGroup w="70%" margin="0 auto" boxShadow="dark-lg">
					<InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.300" />} />
					<Input type="tel" placeholder="Phone number" />
				</InputGroup>
			</Box>
			<Flex justifyContent={"space-evenly"} flexWrap={"wrap"} >
				{pokemonList.map((pokemon, idx) => {
					return (
						<Img src={pokemon.imageUrl}/>
					)
				})}
			</Flex>
		</Flex>
	);
};
