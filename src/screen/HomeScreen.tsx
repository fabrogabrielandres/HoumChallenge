import { Flex } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from '../components/Loader/Loader';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { CardPokemon } from '../components/CardPokemon/CardPokemon';

export const HomeScreen = () => {
	let { pokemonList, loadPokemons, loading } = usePokemonPaginated();

	return (
		<InfiniteScroll next={loadPokemons} dataLength={pokemonList.length} hasMore={loading} loader={<Loader />}>
			<Flex justifyContent={"space-evenly"} flexWrap={"wrap"} >
				{pokemonList.map((pokemon, idx) => {
					return <CardPokemon pokemon={pokemon} key={idx} />;
				})}
			</Flex>
		</InfiniteScroll>
	);
};
