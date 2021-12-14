import { useEffect,  useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { Responce, Pokemon } from '../interfaces/interface';

export const usePokemonSearch = () => {
    const [isFetching, setIsFetching] = useState(true)
	const [ pokemonList, setPokemonList ] = useState<Pokemon[]>([]);
    
	const loadPokemons = async () => {
        let resp = await pokemonApi.get<Responce>("https://pokeapi.co/api/v2/pokemon?limit=3000");
		/* Map de pokemonlist and create pokemon list */
		resp.data.results.forEach(({ name, url }) => {
			const urlParts = url.split('/');
			const id = urlParts[urlParts.length - 2];
			const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
			setPokemonList(pokemonList => [ ...pokemonList, { id, name, imageUrl, } ]);
		
		});
		setIsFetching(false)

	};
	useEffect(() => {
		loadPokemons();
	}, []);

	return { pokemonList, loadPokemons,isFetching };
};
