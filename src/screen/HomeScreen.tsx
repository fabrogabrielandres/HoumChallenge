import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from '../components/Loader/Loader';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
	let { pokemonList, loadPokemons, loading } = usePokemonPaginated();

	return (
		<InfiniteScroll
			next={loadPokemons}
			dataLength={pokemonList.length}
			hasMore={loading}
			loader={<Loader/>}
		>
			{pokemonList.map((pokemon, idx) => (
				<div key={idx}>
					<h1>{pokemon.id}</h1>
					<h1>{pokemon.imageUrl}</h1>
					<h1>{pokemon.id}</h1>
				</div>
			))}
		</InfiniteScroll>
	);
};
