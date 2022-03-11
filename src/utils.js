import {MAX_POKES} from './constants';

export const getRandomAvailablePokemonNumber = (unavailableNumbers, amount) => {
    let randomPokes = [];
    while (randomPokes.length < amount) {
        let randomNumber = getRandomPokemonNumber();
        if (!(unavailableNumbers.includes(randomNumber)) && !(randomPokes.includes(randomNumber))) {
            randomPokes.push(randomNumber);
        };
    };
    return randomPokes;
}

export const getRandomPokemonNumber = () => (Math.floor(Math.random() * MAX_POKES + 1)).toString();

export const pokemonIMGURL = (pokemonNumber) => 
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`

export const PokemonInfoURL = (pokemonNumber) => 
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber} `

export const randomizePokemonList = (pokemonList) => {
    let randomizedPokemon = [];
    while (pokemonList.length) {
        let pokeToPick = (Math.floor(Math.random() * pokemonList.length));
        randomizedPokemon.push(pokemonList.splice(pokeToPick, 1)[0]);
    }
    return randomizedPokemon;
}

export const correctCapitalLetter = (name) => name.charAt(0).toUpperCase() + name.slice(1);
