import axios from 'axios';

export const generateRandomAvailablePokemonNumber = (
  availableNumbers,
  amount
) => {
  let randomPokemonNumbers = [];
  let indexToRemove = null;
  while (randomPokemonNumbers.length < amount) {
    let randomPokeIndex = Math.floor(Math.random() * availableNumbers.length);
    indexToRemove = indexToRemove ?? randomPokeIndex;
    let randomPoke = availableNumbers[randomPokeIndex];
    if (arrayDoesntInclude(randomPokemonNumbers, randomPoke)) {
      randomPokemonNumbers.push(randomPoke);
    }
  }
  return { randomPokemonNumbers, indexToRemove };
};

export const arrayDoesntInclude = (array, item) => !array.includes(item);

export const pokemonIMGURL = (pokemonNumber) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;

export const PokemonInfoURL = (pokemonNumber) =>
  `https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber} `;

export const randomizePokemonList = (pokemonList) => {
  let randomizedPokemon = [];
  while (pokemonList.length) {
    let pokeToPick = Math.floor(Math.random() * pokemonList.length);
    randomizedPokemon.push(pokemonList.splice(pokeToPick, 1)[0]);
  }
  return randomizedPokemon;
};

export const correctCapitalLetter = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);

export const fetchPokemonImage = async (number) =>
  axios.get(pokemonIMGURL(number), {
    responseType: 'blob',
  });

export const fetchPokemonInfo = async (pokemonNumber) =>
  axios.get(PokemonInfoURL(pokemonNumber), {
    responseType: 'json',
  });
