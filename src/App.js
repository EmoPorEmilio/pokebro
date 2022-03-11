import { MainContainer, Content } from './App.styles';
import { Header } from './components/Header';
import { Pokemon } from './components/Pokemon';
import { Options } from './components/Options';
import { useEffect, useState } from 'react';
import { getRandomAvailablePokemonNumber, randomizePokemonList, PokemonInfoURL, correctCapitalLetter } from './utils';
import { YouLose } from './components/YouLose';
import axios from 'axios';

const App = () => {
  const [unavailablePokes, setUnavailablePokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [pokemonNameOptions, setPokemonNameOptions] = useState([]);
  const [HP, setHP] = useState(3);
  const [scorePoints, setScorePoints] = useState('000');

  const handleClickOption = (pokemon) => {
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
    goToNextLevel();
  };

  const handleIncorrectOption = () => {
    setHP((currentHP) => currentHP-1);
    goToNextLevel();
  };

  const getPokemonInfo = async (pokemonNumber) => {
    let pokemonData = await axios.get(PokemonInfoURL(pokemonNumber), {responseType: 'json'});
    return {number: pokemonNumber, name: correctCapitalLetter(pokemonData.data.name)};
  };

  const getLevelOptions = async () => {
    let randomPokemonNumbers = getRandomAvailablePokemonNumber(unavailablePokes, 5);
    let randomPokemon = [];
     
    try {
      randomPokemon = randomPokemonNumbers.map(getPokemonInfo);
    } catch (error) {
        console.log(error);
    }
    return Promise.all(randomPokemon);
  }

  const goToNextLevel = async () => {
    setLoading(true);
    let newPokes = await getLevelOptions();
    let pokemonToGuess = newPokes[0];
    setCurrentPokemon(pokemonToGuess);
    updateUnavailables(pokemonToGuess);
    newPokes = randomizePokemonList(newPokes);
    setPokemonNameOptions(newPokes);
    setLoading(false);
  }

  const updateUnavailables = (pokemonToGuess) => {
    let newUnavailablePokes = unavailablePokes;
    newUnavailablePokes.push(pokemonToGuess);
    setUnavailablePokes(newUnavailablePokes);
  }

  useEffect(() => {
    (async () => {
      await goToNextLevel();
    })();
  }, []);

  return (
    <MainContainer>
      <Header HP={HP} scorePoints={scorePoints}>
      </Header>
      {!loading &&
      <Content>
        {HP > 0 ?
        <>
          <Pokemon pokemon={currentPokemon}></Pokemon>
          <Options handleClickOption={handleClickOption} pokemonNameOptions={pokemonNameOptions}></Options>
        </>
        : <YouLose/>}
      </Content>}
    </MainContainer>
  );
}

export default App;
