import axios from 'axios';
import { types } from './data/types';
import { TYPE_EFFECTIVENESS_OPTION } from './constants';

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
  `https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}`;

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

export const blobToBase64 = (blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      resolve(reader.result);
    };
  });
};

export const padScorePoints = (intPoints) => {
  return intPoints.toString().padStart(3, '0');
};

export const getTypesCombinationDamageCorrectOption = (typesCombination) => {
  let damageMultiplier = 100;

  let attackType = typesCombination[0];
  let firstDefense = typesCombination[1];
  let secondDefense = typesCombination[2];

  let damageRelations = types[attackType].damage_relations;
  let noDamageToList = damageRelations.no_damage_to;
  let halfDamageToList = damageRelations.half_damage_to;
  let doubleDamageToList = damageRelations.double_damage_to;

  for (let i = 0; i < noDamageToList.length; i++) {
    if (
      noDamageToList[i].name === types[firstDefense].name ||
      noDamageToList[i].name === types[secondDefense]?.name
    ) {
      damageMultiplier = 0;
    }
  }

  for (let i = 0; i < halfDamageToList.length; i++) {
    if (halfDamageToList[i].name === types[firstDefense].name) {
      damageMultiplier = damageMultiplier / 2;
    }
    if (halfDamageToList[i].name === types[secondDefense]?.name) {
      damageMultiplier = damageMultiplier / 2;
    }
  }

  for (let i = 0; i < doubleDamageToList.length; i++) {
    if (doubleDamageToList[i].name === types[firstDefense].name) {
      damageMultiplier = damageMultiplier * 2;
    }
    if (doubleDamageToList[i].name === types[secondDefense]?.name) {
      damageMultiplier = damageMultiplier * 2;
    }
  }

  switch (damageMultiplier) {
    case 0:
      return TYPE_EFFECTIVENESS_OPTION.NO_DAMAGE;
    case 25:
      return TYPE_EFFECTIVENESS_OPTION.QUARTER_DAMAGE;
    case 50:
      return TYPE_EFFECTIVENESS_OPTION.HALF_DAMAGE;
    case 100:
      return TYPE_EFFECTIVENESS_OPTION.REGULAR_DAMAGE;
    case 200:
      return TYPE_EFFECTIVENESS_OPTION.DOUBLE_DAMAGE;
    case 400:
      return TYPE_EFFECTIVENESS_OPTION.QUADRUPLE_DAMAGE;
  }
};

export const generateRandomAvailableTypeCombination = (
  availableTypeCombinations
) => {
  let randomTypeIndex = Math.floor(
    Math.random() * availableTypeCombinations.length
  );
  let randomTypeCombination = availableTypeCombinations[randomTypeIndex];
  return { randomTypeCombination, randomTypeIndex };
};
