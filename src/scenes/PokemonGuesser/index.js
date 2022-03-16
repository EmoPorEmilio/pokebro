import { Pokemon } from '../../components/Pokemon';
import { Options } from '../../components/Options';
import { useEffect, useState } from 'react';
import {
  generateRandomAvailablePokemonNumber,
  randomizePokemonList,
  correctCapitalLetter,
  fetchPokemonImage,
  fetchPokemonInfo,
} from '../../utils';
import { MAX_POKES, MAX_TRIES_IF_ERROR, ERROR_MESSAGES } from '../../constants';

export const PokemonGuesserScene = ({
  level,
  loading,
  setLoading,
  handleLifeLoss,
  handlePointScored,
  setErrorMessage,
  validationState,
  setValidationState,
}) => {
  const [availablePokes, setAvailablePokes] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [currentPokemonSrc, setCurrentPokemonSrc] = useState(null);
  const [pokemonNameOptions, setPokemonNameOptions] = useState([]);

  const handleClickOption = (pokemon) => {
    setValidationState(true);
    if (currentPokemon.name === pokemon.name) {
      handleCorrectOption();
    } else {
      handleIncorrectOption();
    }
  };

  const handleCorrectOption = () => {
    handlePointScored();
  };

  const handleIncorrectOption = () => {
    handleLifeLoss();
  };

  const getLevelOptions = async (randomPokemonNumbers) => {
    let randomPokemon = randomPokemonNumbers.map(fetchPokemonInfo);
    return Promise.allSettled(randomPokemon);
  };

  const goToNextLevel = async (setup) => {
    let availableNumbers = setup ? getInitialAvailablePokes() : availablePokes;
    const { randomPokemonNumbers, indexToRemove } =
      generateRandomAvailablePokemonNumber(availableNumbers, 5);
    let count = 0;
    let newPokemonsRequests = await getLevelOptions(randomPokemonNumbers);
    let allPokemonInfoIsHere = true;
    let newPokemons = newPokemonsRequests.map((promise, index) => {
      try {
        return {
          number: randomPokemonNumbers[index],
          name: correctCapitalLetter(promise.value.data.name),
        };
      } catch (error) {
        allPokemonInfoIsHere = false;
        return null;
      }
    });

    while (!allPokemonInfoIsHere) {
      if (count === MAX_TRIES_IF_ERROR) {
        setErrorMessage(ERROR_MESSAGES.NO_POKEMON_NAMES);
        return;
      } else {
        count++;
        allPokemonInfoIsHere = true;
        let successNewPokemons = newPokemons.map(async (pokemon, index) => {
          if (pokemon === null) {
            try {
              let request = await fetchPokemonInfo(randomPokemonNumbers[index]);
              return {
                number: randomPokemonNumbers[index],
                name: correctCapitalLetter(request.data.name),
              };
            } catch (error) {
              allPokemonInfoIsHere = false;
              return null;
            }
          } else {
            return pokemon;
          }
        });
        newPokemons = successNewPokemons;
      }
    }
    let pokemonToGuess = newPokemons[0];
    setCurrentPokemon(pokemonToGuess);

    count = 0;
    let imgSrc = null;
    while (!imgSrc) {
      if (count === MAX_TRIES_IF_ERROR) {
        setErrorMessage(ERROR_MESSAGES.NO_POKEMON_IMAGE);
        return;
      } else {
        count++;
        try {
          let res = await fetchPokemonImage(randomPokemonNumbers[0]);
          imgSrc = URL.createObjectURL(res.data);
        } catch (error) {}
      }
    }
    setCurrentPokemonSrc(imgSrc);
    setLoading(false);

    updateAvailables(availableNumbers, indexToRemove);
    setPokemonNameOptions(randomizePokemonList(newPokemons));
  };

  const updateAvailables = (availableNumbers, indexToRemove) => {
    availableNumbers.splice(indexToRemove);
    setAvailablePokes(availableNumbers);
  };

  const getInitialAvailablePokes = () => {
    let availableNumbers = [];
    for (let i = 1; i < MAX_POKES; i++) {
      availableNumbers.push(i);
    }
    return availableNumbers;
  };

  useEffect(() => {
    (async () => {
      let isSetup = true;
      goToNextLevel(isSetup);
    })();
  }, [level]);

  return (
    <>
      <Pokemon loading={loading} pokemonSrc={currentPokemonSrc}></Pokemon>
      <Options
        correctNameOption={currentPokemon?.name}
        validation={validationState}
        loading={loading}
        handleClickOption={handleClickOption}
        pokemonNameOptions={pokemonNameOptions}></Options>
    </>
  );
};
