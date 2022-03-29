import { Pokemon } from '../../components/Pokemon';
import { Options } from '../../components/Options';
import { YouLose } from '../../components/YouLose';
import { Error } from '../../components/Error';
import { Header } from '../../components/Header';
import { Content } from '../../App.styles';
import { useEffect, useState } from 'react';
import {
  generateRandomAvailablePokemonNumber,
  randomizePokemonList,
  correctCapitalLetter,
  fetchPokemonImage,
  fetchPokemonInfo,
  blobToBase64,
  padScorePoints,
} from '../../utils';
import {
  MAX_POKES,
  MAX_TRIES_IF_ERROR,
  ERROR_MESSAGES,
  GAME_STATES,
  DIFFICULTY_LEVELS,
  GAME_MODES,
} from '../../constants';
export const PokemonGuesser = ({ handleHeaderBack }) => {
  const getStateFromStorage = () => {
    return {
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
      gameState: localStorage.getItem('gameState') ?? GAME_STATES.LEVEL_SETUP,
    };
  };

  const stateFromStorage = getStateFromStorage();
  const [HP, setHP] = useState(stateFromStorage.HP);
  const [scorePoints, setScorePoints] = useState(stateFromStorage.scorePoints);
  const [level, setLevel] = useState(stateFromStorage.level);
  const [gameState, setGameState] = useState(stateFromStorage.gameState);
  const [errorMessage, setErrorMessage] = useState('');
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
    if (gameState === GAME_STATES.VALIDATION) {
      removePokemonsFromGameState();
      setGameState(GAME_STATES.LEVEL_SETUP);
      localStorage.setItem('gameState', GAME_STATES.LEVEL_SETUP);
    }
  };

  const handleClickOption = (pokemon) => {
    setLevel((prevLevel) => {
      let newLevel = prevLevel + 1;
      localStorage.setItem('level', newLevel);
      return newLevel;
    });
    if (currentPokemon.name === pokemon.name) {
      handleCorrectOption();
    } else {
      removeLevelInfoFromStorage();
      handleIncorrectOption();
    }
  };

  const handleCorrectOption = () => {
    removePokemonsFromGameState();
    setScorePoints((prevScorePoints) => {
      let newScorePoints = padScorePoints(parseInt(prevScorePoints) + 1);
      localStorage.setItem('scorePoints', newScorePoints);
      return newScorePoints;
    });
    setGameState(GAME_STATES.LEVEL_SETUP);
  };

  const handleIncorrectOption = () => {
    setHP((prevHP) => {
      let newHP = prevHP - 1;
      localStorage.setItem('HP', newHP);
      if (newHP === 0) {
        setGameState(GAME_STATES.YOU_LOSE);
      } else {
        setGameState(GAME_STATES.VALIDATION);
      }
      return newHP;
    });
  };

  const restartGame = () => {
    setLevel(0);
    setHP(3);
    setScorePoints('000');
    setGameState(GAME_STATES.LEVEL_SETUP);
  };

  const getLevelOptions = async (randomPokemonNumbers) => {
    let randomPokemon = randomPokemonNumbers.map(fetchPokemonInfo);
    return Promise.allSettled(randomPokemon);
  };

  const loadNewLevel = async (firstSetup) => {
    let availableNumbers = firstSetup
      ? getInitialAvailablePokes()
      : availablePokes;
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
    setGameState(GAME_STATES.LEVEL_INFO);

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
    localStorage.setItem('gameState', GAME_STATES.LEVEL_INFO);
  };

  const removePokemonsFromGameState = () => {
    setCurrentPokemon(null);
    setCurrentPokemonSrc(null);
    setPokemonNameOptions([]);
  };

  const removeLevelInfoFromStorage = () => {
    localStorage.removeItem('gameState');
    localStorage.removeItem('currentPokemon');
    localStorage.removeItem('currentPokemonSrc');
    localStorage.removeItem('pokemonNameOptions');
  };

  const removeGameStateFromStorage = () => {
    localStorage.removeItem('availablePokes');
    localStorage.removeItem('scorePoints');
    localStorage.removeItem('HP');
    removeLevelInfoFromStorage();
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
    switch (gameState) {
      case GAME_STATES.LEVEL_SETUP:
        let isSetup = level === 0;
        loadNewLevel(isSetup);
        break;
      case GAME_STATES.LEVEL_INFO:
        break;
      case GAME_STATES.VALIDATION:
        break;
      case GAME_STATES.YOU_LOSE:
        removeGameStateFromStorage();
        break;
    }
  }, [gameState]);

  return (
    <>
      <Header
        handleHeaderBack={handleHeaderBack}
        inGame={true}
        HP={HP}
        scorePoints={scorePoints}></Header>
      <Content onClick={handleAppTap}>
        {gameState === GAME_STATES.YOU_LOSE ? (
          <YouLose
            scorePoints={scorePoints}
            difficulty={DIFFICULTY_LEVELS.HARD}
            gameMode={GAME_MODES.POKEMON_GUESSER}
            restartGame={restartGame}
          />
        ) : errorMessage ? (
          <Error message={errorMessage}></Error>
        ) : (
          <>
            <Pokemon
              loading={gameState === GAME_STATES.LEVEL_SETUP}
              pokemonSrc={currentPokemonSrc}></Pokemon>
            <Options
              correctNameOption={currentPokemon?.name}
              validation={gameState === GAME_STATES.VALIDATION}
              loading={gameState === GAME_STATES.LEVEL_SETUP}
              handleClickOption={handleClickOption}
              pokemonNameOptions={pokemonNameOptions}></Options>
          </>
        )}
      </Content>
    </>
  );
};
