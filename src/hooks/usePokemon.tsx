import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { Atributs } from '../interfaces/interface2';


export const usePokemon = (id:string|undefined) => {
    const [isLoading, setisLoading] = useState(true)
    const [atributs, setAtributs] = useState({}as Atributs)

    const fetchAtributs = async()=>{
        setisLoading(true)
        const resp= await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setAtributs(resp.data);
        setisLoading(false)
    }
    useEffect(() => {
        fetchAtributs()
    }, [id]);
    return ({atributs,isLoading})
};
