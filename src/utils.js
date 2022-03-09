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
    let stringNumber = (Math.floor(Math.random() * MAX_POKES + 1)).toString();
    stringNumber.length === 1 && (stringNumber = '00'.concat(stringNumber));
    stringNumber.length === 2 && (stringNumber = '0'.concat(stringNumber))
    return stringNumber;
}

export const pokemonIMGURL = (pokemonNumber) => 
    `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber}.png`