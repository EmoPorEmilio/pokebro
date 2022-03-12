import { MainContainer, Content } from './App.styles';
import { Header } from './components/Header';
import { Pokemon } from './components/Pokemon';
import { Options } from './components/Options';
import { useEffect, useState } from 'react';
import { getRandomAvailablePokemonNumber, randomizePokemonList, PokemonInfoURL, pokemonIMGURL, correctCapitalLetter } from './utils';
import { YouLose } from './components/YouLose';
import axios from 'axios';
import { MAX_POKES } from './constants';

const App = () => {
  const [availablePokes, setAvailablePokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [currentPokemonSrc, setCurrentPokemonSrc] = useState(null);
  const [pokemonNameOptions, setPokemonNameOptions] = useState([]);
  const [HP, setHP] = useState(3);
  const [scorePoints, setScorePoints] = useState('000');

  const handleClickOption = (pokemon) => {
    setLoading(true);
    if (currentPokemon.name === pokemon.name) {
      handleCorrectOption();
    }
    else {
      handleIncorrectOption();
    }
  }

  const handleCorrectOption = () => {
    let currentPoints = parseInt(scorePoints);
    setScorePoints((currentPoints+1).toString().padStart(3, '0'))
    goToNextLevel(availablePokes);
  };

  const handleIncorrectOption = () => {
    setHP((currentHP) => currentHP-1);
    goToNextLevel();
  };

  const getPokemonInfo = async (pokemonNumber) => {
    let pokemonData = await axios.get(PokemonInfoURL(pokemonNumber), {responseType: 'json'});
    return {number: pokemonNumber, name: correctCapitalLetter(pokemonData.data.name)};
  };

  const getLevelOptions = async (randomPokemonNumbers) => {
    let randomPokemon = [];
     
    try {
      randomPokemon = randomPokemonNumbers.map(getPokemonInfo);
    } catch (error) {
        console.log(error);
    }
    return Promise.all(randomPokemon);
  }

  const goToNextLevel = async (setup) => {
    let availableNumbers = setup? getInitialAvailablePokes() : availablePokes;
    const {randomPokemonNumbers, indexToRemove} = getRandomAvailablePokemonNumber(availableNumbers, 5);
    let newPokemons = await getLevelOptions(randomPokemonNumbers);
    let pokemonToGuess = newPokemons[0];
    setCurrentPokemon(pokemonToGuess);
    fetchPokemonImage(pokemonToGuess.number);
    updateAvailables(availableNumbers, indexToRemove);
    setPokemonNameOptions(randomizePokemonList(newPokemons));
  }

  const updateAvailables = (availableNumbers, indexToRemove) => {
    availableNumbers.splice(indexToRemove);
    setAvailablePokes(availableNumbers);
  }

  const getInitialAvailablePokes = () => {
    let availableNumbers = [];
    for (let i = 1; i < MAX_POKES; i++) {
      availableNumbers.push(i);
    }
    return availableNumbers;
  }

  useEffect(() => {
    (async () => {
      await goToNextLevel(true);
    })();
  }, []);

  const fetchPokemonImage = async (number) => {
      try {
          let res = await axios.get(pokemonIMGURL(number), {responseType: 'blob'});
          setCurrentPokemonSrc(URL.createObjectURL(res.data));
          setLoading(false);
      } catch (error) {
          console.log(error);
      }
  }

  return (
    <MainContainer>
      <Header HP={HP} scorePoints={scorePoints}>
      </Header>
      <Content>
        {HP > 0 ?
        <>
          <Pokemon loading={loading} pokemonSrc={currentPokemonSrc}></Pokemon>
          <Options loading={loading} handleClickOption={handleClickOption} pokemonNameOptions={pokemonNameOptions}></Options>
        </>
        : <YouLose/>}
      </Content>
    </MainContainer>
  );
}

export default App;
