import { MainContainer, Content } from './App.styles';
import { Header } from './components/Header';
import { Pokemon } from './components/Pokemon';
import { Options } from './components/Options';
import { useEffect, useState } from 'react';
import {
  getRandomAvailablePokemonNumber,
  randomizePokemonList,
  PokemonInfoURL,
  pokemonIMGURL,
  correctCapitalLetter,
} from './utils';
import { YouLose } from './components/YouLose';
import axios from 'axios';
import { MAX_POKES, MAX_TRIES_IF_ERROR } from './constants';
import { Error } from './components/Error';

const App = () => {
  const [availablePokes, setAvailablePokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [currentPokemonSrc, setCurrentPokemonSrc] = useState(null);
  const [pokemonNameOptions, setPokemonNameOptions] = useState([]);
  const [HP, setHP] = useState(3);
  const [scorePoints, setScorePoints] = useState('000');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClickOption = (pokemon) => {
    setLoading(true);
    if (currentPokemon.name === pokemon.name) {
      handleCorrectOption();
    } else {
      handleIncorrectOption();
    }
  };

  const handleCorrectOption = () => {
    let currentPoints = parseInt(scorePoints);
    setScorePoints((currentPoints + 1).toString().padStart(3, '0'));
    goToNextLevel(availablePokes);
  };

  const handleIncorrectOption = () => {
    setHP((currentHP) => currentHP - 1);
    goToNextLevel();
  };

  const getPokemonInfo = async (pokemonNumber) =>
    axios.get(PokemonInfoURL(pokemonNumber), {
      responseType: 'json',
    });

  const getLevelOptions = async (randomPokemonNumbers) => {
    let randomPokemon = randomPokemonNumbers.map(getPokemonInfo);
    return Promise.allSettled(randomPokemon);
  };

  const goToNextLevel = async (setup) => {
    let availableNumbers = setup ? getInitialAvailablePokes() : availablePokes;
    const { randomPokemonNumbers, indexToRemove } =
      getRandomAvailablePokemonNumber(availableNumbers, 5);
    let count = 0;
    try {
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
          setErrorMessage(
            'Los Pokémon se liberaron y están causando estragos :( Vuelve más tarde.'
          );
          return;
        } else {
          count++;
          allPokemonInfoIsHere = true;
          let successNewPokemons = newPokemons.map(async (pokemon, index) => {
            if (pokemon === null) {
              try {
                let request = await getPokemonInfo(randomPokemonNumbers[index]);
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
          setErrorMessage(
            'El Pokémon está tímido y no sale :( Vuelve más tarde.'
          );
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
    } catch (error) {}
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
      await goToNextLevel(true);
    })();
  }, []);

  const fetchPokemonImage = async (number) =>
    axios.get(pokemonIMGURL(number), {
      responseType: 'blob',
    });

  return (
    <MainContainer>
      <Header HP={HP} scorePoints={scorePoints}></Header>
      <Content>
        {HP === 0 ? (
          <YouLose />
        ) : errorMessage ? (
          <Error message={errorMessage}></Error>
        ) : (
          <>
            <Pokemon loading={loading} pokemonSrc={currentPokemonSrc}></Pokemon>
            <Options
              loading={loading}
              handleClickOption={handleClickOption}
              pokemonNameOptions={pokemonNameOptions}></Options>
          </>
        )}
      </Content>
    </MainContainer>
  );
};

export default App;
