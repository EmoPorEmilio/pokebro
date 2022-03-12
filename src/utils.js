import {MAX_POKES} from './constants';

export const getRandomAvailablePokemonNumber = (availableNumbers, amount) => {
    let randomPokemonNumbers = [];
    let indexToRemove = null; 
    let count = 0; 
    while (randomPokemonNumbers.length < amount) {
        count++;
        if (count > 10) return {};
        let randomPokeIndex = Math.floor(Math.random() * availableNumbers.length);
        indexToRemove = indexToRemove ?? randomPokeIndex;
        let randomPoke = availableNumbers[randomPokeIndex];
        if (arrayDoesntInclude(randomPokemonNumbers, randomPoke)) {
            randomPokemonNumbers.push(randomPoke);
        };
    };
    return {randomPokemonNumbers, indexToRemove};
}

export const arrayDoesntInclude = (array, item) => !(array.includes(item));

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
