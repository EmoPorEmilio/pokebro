import { Pokemon } from '../../components/Pokemon';
import { Options } from '../../components/Options';
import { YouLose } from '../../components/YouLose';
import { Error } from '../../components/Error';
import { Header } from '../../components/Header';
import { Content } from '../../App.styles';
import { useEffect, useState, useMemo, useCallback } from 'react';
import {
  generateRandomAvailablePokemonNumber,
  randomizePokemonList,
  correctCapitalLetter,
  fetchPokemonImage,
  fetchPokemonInfo,
  blobToBase64,
} from '../../utils';
import { MAX_POKES, MAX_TRIES_IF_ERROR, ERROR_MESSAGES } from '../../constants';
export const PokemonGuesser = ({ loading, setLoading, returnToLanding }) => {
  const getStateFromStorage = () => {
    return {
      fromStorage: !!localStorage.getItem('availablePokes'),
      availablePokes: JSON.parse(
        localStorage.getItem('availablePokes') ?? '[]'
      ),
      scorePoints: localStorage.getItem('scorePoints') ?? '000',
      HP: parseInt(localStorage.getItem('HP') ?? 3),
      currentPokemon: JSON.parse(
        localStorage.getItem('currentPokemon') ?? null
      ),
      currentPokemonSrc: localStorage.getItem('currentPokemonSrc') ?? null,
      pokemonNameOptions: JSON.parse(
        localStorage.getItem('pokemonNameOptions') ?? '[]'
      ),
      level: parseInt(localStorage.getItem('level') ?? 0),
    };
  };
  const stateFromStorage = getStateFromStorage();
  const [HP, setHP] = useState(stateFromStorage.HP);
  const [scorePoints, setScorePoints] = useState(stateFromStorage.scorePoints);
  const [level, setLevel] = useState(stateFromStorage.level);
  const [errorMessage, setErrorMessage] = useState('');
  const [comingFromStorage, setComingFromStorage] = useState(
    stateFromStorage.fromStorage
  );
  const [validationState, setValidationState] = useState(false);
  const [availablePokes, setAvailablePokes] = useState(
    stateFromStorage.availablePokes
  );
  const [currentPokemon, setCurrentPokemon] = useState(
    stateFromStorage.currentPokemon
  );
  const [currentPokemonSrc, setCurrentPokemonSrc] = useState(
    stateFromStorage.currentPokemonSrc
  );
  const [pokemonNameOptions, setPokemonNameOptions] = useState(
    stateFromStorage.pokemonNameOptions
  );

  const handleAppTap = () => {
    if (validationState) {
      setComingFromStorage(false);
      setLevel((prevLevel) => prevLevel + 1);
      setValidationState(false);
      setLoading(true);
    }
  };

  const handleLifeLoss = () => {
    setHP((prevHP) => {
      let newHP = prevHP - 1;
      newHP === 0
        ? removeGameStateFromStorage()
        : localStorage.setItem('HP', newHP);
      return newHP;
    });
  };

  const handlePointScored = () => {
    setScorePoints((prevPoints) => {
      let newPoints = (parseInt(prevPoints) + 1).toString().padStart(3, '0');
      localStorage.setItem('currentPoints', newPoints);
      return newPoints;
    });
  };

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

  const restartGame = () => {
    setLevel(0);
    setHP(3);
    setScorePoints('000');
    setValidationState(false);
    setLoading(true);
    setComingFromStorage(false);
  };

  const isHealthZero = HP === 0;

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
          imgSrc = await blobToBase64(res.data);
        } catch (error) {}
      }
    }
    setCurrentPokemonSrc(imgSrc);
    setLoading(false);

    let newAvailableNumbers = updateAvailables(availableNumbers, indexToRemove);
    let newRandomPokes = randomizePokemonList(newPokemons);
    setPokemonNameOptions(newRandomPokes);
    saveGameStateToStorage(
      newAvailableNumbers,
      pokemonToGuess,
      imgSrc,
      newRandomPokes
    );
  };

  const saveGameStateToStorage = (
    newAvailableNumbers,
    pokemonToGuess,
    imgSrc,
    newPokemons
  ) => {
    localStorage.setItem('availablePokes', JSON.stringify(newAvailableNumbers));
    localStorage.setItem('scorePoints', scorePoints);
    localStorage.setItem('HP', HP);
    localStorage.setItem('currentPokemon', JSON.stringify(pokemonToGuess));
    localStorage.setItem('currentPokemonSrc', imgSrc);
    localStorage.setItem('pokemonNameOptions', JSON.stringify(newPokemons));
    localStorage.setItem('level', level);
  };

  const removeGameStateFromStorage = () => {
    localStorage.removeItem('availablePokes');
    localStorage.removeItem('scorePoints');
    localStorage.removeItem('HP');
    localStorage.removeItem('currentPokemon');
    localStorage.removeItem('currentPokemonSrc');
    localStorage.removeItem('pokemonNameOptions');
    localStorage.removeItem('level');
  };

  const updateAvailables = (availableNumbers, indexToRemove) => {
    availableNumbers.splice(indexToRemove, 1);
    setAvailablePokes(availableNumbers);
    return availableNumbers;
  };

  const getInitialAvailablePokes = () => {
    let availableNumbers = [];
    for (let i = 1; i <= MAX_POKES; i++) {
      availableNumbers.push(i);
    }
    return availableNumbers;
  };

  useEffect(() => {
    let isSetup = level === 0;
    if (!comingFromStorage) {
      goToNextLevel(isSetup);
    } else {
      setLoading(false);
    }
  }, [level]);

  useEffect(() => {
    if (HP === 0) setValidationState(false);
  }, [HP]);

  return (
    <>
      <Header
        returnToLanding={returnToLanding}
        inGame={true}
        HP={HP}
        scorePoints={scorePoints}></Header>
      <Content onClick={handleAppTap}>
        {isHealthZero ? (
          <YouLose restartGame={restartGame} />
        ) : errorMessage ? (
          <Error message={errorMessage}></Error>
        ) : (
          <>
            <Pokemon loading={loading} pokemonSrc={currentPokemonSrc}></Pokemon>
            <Options
              correctNameOption={currentPokemon?.name}
              validation={validationState}
              loading={loading}
              handleClickOption={handleClickOption}
              pokemonNameOptions={pokemonNameOptions}></Options>
          </>
        )}
      </Content>
    </>
  );
};
