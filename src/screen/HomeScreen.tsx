import React from 'react'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {

    let algo=usePokemonPaginated()
    console.log(algo);
    
    return (
        <div>
            <h1>homescreen</h1>
        </div>
    )
}
