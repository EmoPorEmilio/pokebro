import { Header } from '../../components/Header';
import { Content } from '../../App.styles';
import { useState, useEffect } from 'react';
import { GAME_STATES, TYPE_EFFECTIVENESS_OPTION } from '../../constants';
import {
  generateRandomAvailableTypeCombination,
  getTypesCombinationDamageCorrectOption,
  padScorePoints,
} from '../../utils';
import { types } from '../../data/types';
import { YouLose } from '../../components/YouLose';
import { TypeEffectivenessOptions } from '../../components/Options/TypeEffectivenessOptions';
import { Error } from '../../components/Error';
import { Types } from '../../components/Types';

export const DamageCalculator = ({ returnToLanding }) => {
  const [HP, setHP] = useState(3);
  const [scorePoints, setScorePoints] = useState('000');
  const [level, setLevel] = useState(0);
  const [gameState, setGameState] = useState(GAME_STATES.LEVEL_SETUP);
  const [errorMessage, setErrorMessage] = useState('');
  const [availableLevelCombinations, setAvailableLevelCombinations] = useState(
    []
  );
  const [currentTypesCombination, setCurrentTypesCombination] = useState([
    null,
    null,
    null,
  ]);
  const [correctOption, setCorrectOption] = useState(null);

  const handleAppTap = () => {
    if (gameState === GAME_STATES.VALIDATION) {
      removeTypesFromGameState();
      setGameState(GAME_STATES.LEVEL_SETUP);
    }
  };

  const handleClickOption = (option) => {
    setLevel((prevLevel) => {
      let newLevel = prevLevel + 1;
      return newLevel;
    });
    if (correctOption === option) {
      handleCorrectOption();
    } else {
      handleIncorrectOption();
    }
  };

  const handleCorrectOption = () => {
    removeTypesFromGameState();
    setScorePoints((prevScorePoints) => {
      let newScorePoints = padScorePoints(parseInt(prevScorePoints) + 1);
      return newScorePoints;
    });
    setGameState(GAME_STATES.LEVEL_SETUP);
  };

  const handleIncorrectOption = () => {
    setHP((prevHP) => {
      let newHP = prevHP - 1;
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
    removeTypesFromGameState();
  };

  const removeTypesFromGameState = () => {
    setCurrentTypesCombination([null, null, null]);
    setCorrectOption(null);
  };

  const loadNewLevel = async (firstSetup) => {
    let availableTypeCombinations = firstSetup
      ? getInitialAvailableTypeCombinations()
      : availableLevelCombinations;
    const { randomTypeCombination, randomTypeIndex } =
      generateRandomAvailableTypeCombination(availableTypeCombinations);
    setCurrentTypesCombination(randomTypeCombination);
    console.log(randomTypeCombination);
    setCorrectOption(
      getTypesCombinationDamageCorrectOption(randomTypeCombination)
    );
    setGameState(GAME_STATES.LEVEL_INFO);
    let newAvailableNumbers = updateAvailables(
      availableTypeCombinations,
      randomTypeIndex
    );
  };

  const updateAvailables = (availableTypeCombinations, indexToRemove) => {
    availableTypeCombinations.splice(indexToRemove, 1);
    setAvailableLevelCombinations(availableTypeCombinations);
    return availableTypeCombinations;
  };

  const getInitialAvailableTypeCombinations = () => {
    let availableNumbers = [];
    for (let attack = 0; attack < types.length; attack++) {
      for (let firstDefense = 0; firstDefense < types.length; firstDefense++) {
        for (
          let secondDefense = firstDefense + 1;
          secondDefense < types.length + 1;
          secondDefense++
        ) {
          availableNumbers.push([
            attack,
            firstDefense,
            types[secondDefense] ? secondDefense : null,
          ]);
        }
      }
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
        break;
    }
  }, [gameState]);

  return (
    <>
      <Header
        returnToLanding={returnToLanding}
        inGame={true}
        HP={HP}
        scorePoints={scorePoints}></Header>
      <Content onClick={handleAppTap}>
        {gameState === GAME_STATES.YOU_LOSE ? (
          <YouLose restartGame={restartGame} />
        ) : errorMessage ? (
          <Error message={errorMessage}></Error>
        ) : (
          <>
            <Types
              typesCombinations={currentTypesCombination}
              loading={gameState === GAME_STATES.LEVEL_SETUP}></Types>
            <TypeEffectivenessOptions
              correctOption={correctOption}
              validation={gameState === GAME_STATES.VALIDATION}
              loading={gameState === GAME_STATES.LEVEL_SETUP}
              handleClickOption={handleClickOption}
              options={[
                TYPE_EFFECTIVENESS_OPTION.NO_DAMAGE,
                TYPE_EFFECTIVENESS_OPTION.QUARTER_DAMAGE,
                TYPE_EFFECTIVENESS_OPTION.HALF_DAMAGE,
                TYPE_EFFECTIVENESS_OPTION.REGULAR_DAMAGE,
                TYPE_EFFECTIVENESS_OPTION.DOUBLE_DAMAGE,
                TYPE_EFFECTIVENESS_OPTION.QUADRUPLE_DAMAGE,
              ]}
            />
          </>
        )}
      </Content>
    </>
  );
};
