import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { Responce, Pokemon } from '../interfaces/interface2';

export const usePokemonPaginated = () => {
	const [ pokemonList, setPokemonList ] = useState<Pokemon[]>([]);
	const [ isLoading, setIsLoading ] = useState(true);
	const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=10');

	const loadPokemons = async () => {
		setIsLoading(true);
		let resp = await pokemonApi.get<Responce>(nextPageUrl.current);

		/* Map de pokemonlist and create pokemon list */
		resp.data.results.forEach(({ name, url }) => {
			const urlParts = url.split('/');
			const id = urlParts[urlParts.length - 2];
			const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
			setPokemonList((pokemonList) => [ ...pokemonList, { id, name, imageUrl } ]);
			setIsLoading(false);
		});
	};
	useEffect(() => {
		loadPokemons();
	}, []);

	return {pokemonList,isLoading};
};
