import { Flex, Text, InputGroup, InputLeftElement, Input, Box,  } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { useEffect, useState } from 'react';
import { Loader } from '../components/Loader/Loader';
import { CardPokemon } from '../components/CardPokemon/CardPokemon';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { Pokemon } from '../interfaces/interface';

export const SearchScreen = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [ query, setQuery ] = useState('');
	const { pokemonList, loadPokemons, isFetching } = usePokemonSearch();
	const [ pokemonFiltered, setPokemonFiltered ] = useState<Pokemon[]>([]);

	const { debounceValue } = useDebouncedValue(query, 500);

	useEffect(() => {
		loadPokemons();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(
		() => {
			if (debounceValue.length === 0) {
				return setPokemonFiltered([]);
			}
			setPokemonFiltered(
				pokemonList.filter((pokemon) =>
					pokemon.name.toLocaleLowerCase().includes(debounceValue.toLocaleLowerCase())
				)
			);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ debounceValue ]
	);

	return isFetching ? (
		<Loader />
	) : (
		<>
				<Flex flexWrap="wrap" justifyContent="center">
			<Text mt={10} display="inline" fontSize="x-large" color="#ff452b">
				Search Pokemon by Id or Name...
			</Text>
			<Box w={'100%'} mt={10}>
				<InputGroup w="70%" margin="0 auto" boxShadow="dark-lg">
					<InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.300" />} />
					<Input placeholder="Phone number" onChange={(e) => setQuery(e.target.value)} />
				</InputGroup>
			</Box>
			<Text mt={10} display="block" fontSize="x-large" color="#ff452b">
				{`Pokemon: ${debounceValue}`}
			</Text>
				</Flex>
			<Flex justifyContent={'space-evenly'} flexWrap={'wrap'}>
				{pokemonFiltered.map((pokemon, idx) => {
					return <CardPokemon pokemon={pokemon} key={idx} />;
				})}
			</Flex>
				</>
	);
};
