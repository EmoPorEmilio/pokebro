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

export const getRandomPokemonNumber = () => {
    let stringPokemonNumber = (Math.floor(Math.random() * MAX_POKES + 1)).toString();
    stringPokemonNumber.length === 1 && (stringPokemonNumber = `00${stringPokemonNumber}`);
    stringPokemonNumber.length === 2 && (stringPokemonNumber = `0${stringPokemonNumber}`);
    return stringPokemonNumber;
}

export const pokemonIMGURL = (pokemonNumber) => 
    `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png`