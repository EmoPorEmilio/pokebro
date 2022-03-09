import { useEffect, useState } from "react"
import { PokemonCard } from './Pokemon.styles';
import { pokemonIMGURL } from '../../utils';

import axios from 'axios';

export const Pokemon = ({pokemonNumber}) => {
    const [src, setSrc] = useState(null);

    const fetchPokemonImage = async () => {
        try {
            let res = await axios.get(pokemonIMGURL(pokemonNumber), {responseType: 'blob'});
            console.log(res.data);
            setSrc(URL.createObjectURL(res.data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (pokemonNumber) {
            fetchPokemonImage();
        };
    }, [pokemonNumber]);

    return <PokemonCard>
            {src && <img src={src}/>}
           </PokemonCard>
}