import React from 'react'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {

    let {isLoading,pokemonList}=usePokemonPaginated()
    console.log(pokemonList);
    
    return (
        <div>
            <h1>homescreen</h1>
        </div>
    )
}
