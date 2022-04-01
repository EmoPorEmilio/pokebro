import { Header } from '../../components/Header';
import { Content } from '../../App.styles';
import { useState, useEffect, useRef } from 'react';
import {
  GAME_STATES,
  TYPE_EFFECTIVENESS_OPTION,
  DIFFICULTY_LEVELS,
  GAME_MODES,
} from '../../constants';
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
import { DifficultySelector } from './DifficultySelector';

export const DamageCalculator = ({ handleHeaderBack }) => {
  const getStateFromStorage = () => {
    return {
      HP: parseInt(localStorage.getItem('HP_DC') ?? 3),
      scorePoints: localStorage.getItem('scorePoints_DC') ?? '000',
      level: parseInt(localStorage.getItem('level_DC') ?? 0),
      difficulty: localStorage.getItem('difficulty_DC') ?? null,
      gameState:
        localStorage.getItem('gameState_DC') ?? GAME_STATES.SELECT_DIFFICULTY,
      availableLevelCombinations: JSON.parse(
        localStorage.getItem('availableLevelCombinations_DC') ?? '[]'
      ),
      currentTypesCombination: JSON.parse(
        localStorage.getItem('currentTypesCombination_DC') ??
          '[null, null, null]'
      ),
      correctOption: localStorage.getItem('correctOption_DC') ?? null,
      timer: parseInt(localStorage.getItem('timer_DC') ?? 5),
    };
  };

  const stateFromStorage = getStateFromStorage();

  const [HP, setHP] = useState(stateFromStorage.HP);
  const [scorePoints, setScorePoints] = useState(stateFromStorage.scorePoints);
  const [level, setLevel] = useState(stateFromStorage.level);
  const timerCountdown = useRef(null);
  const [timer, setTimer] = useState(stateFromStorage.timer);
  const [gameState, setGameState] = useState(stateFromStorage.gameState);
  const [difficulty, setDifficulty] = useState(stateFromStorage.difficulty);
  const [errorMessage, setErrorMessage] = useState('');
  const [availableLevelCombinations, setAvailableLevelCombinations] = useState(
    stateFromStorage.availableLevelCombinations
  );
  const [currentTypesCombination, setCurrentTypesCombination] = useState(
    stateFromStorage.currentTypesCombination
  );
  const [correctOption, setCorrectOption] = useState(
    stateFromStorage.correctOption
  );

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
      removeTypesFromStorage();
      handleIncorrectOption();
    }
  };

  const handleCorrectOption = () => {
    removeTypesFromGameState();
    setScorePoints((prevScorePoints) => {
      let newScorePoints = padScorePoints(parseInt(prevScorePoints) + 1);
      localStorage.setItem('scorePoints_DC', newScorePoints);
      return newScorePoints;
    });
    setGameState(GAME_STATES.LEVEL_SETUP);
  };

  const loseGame = () => {
    clearInterval(timerCountdown.current);
    setGameState(GAME_STATES.YOU_LOSE);
    localStorage.removeItem('gameState');
  };

  const handleIncorrectOption = () => {
    setHP((prevHP) => {
      let newHP = prevHP - 1;
      localStorage.setItem('HP_DC', newHP);
      if (newHP === 0) {
        loseGame();
      } else {
        localStorage.setItem('gameState_DC', GAME_STATES.LEVEL_SETUP);
        setGameState(GAME_STATES.VALIDATION);
      }
      return newHP;
    });
  };

  const restartGame = () => {
    restartGameState();
  };

  const restartGameState = () => {
    removeGameStateFromStorage();
    removeTypesFromGameState();
    setLevel(0);
    setHP(3);
    setTimer(100);
    setScorePoints('000');
    setGameState(GAME_STATES.SELECT_DIFFICULTY);
  };

  const removeTypesFromGameState = () => {
    setCurrentTypesCombination([null, null, null]);
    setCorrectOption(null);
  };

  const removeTypesFromStorage = () => {
    localStorage.removeItem('currentTypesCombination_DC');
    localStorage.removeItem('correctOption_DC');
  };

  const removeGameStateFromStorage = () => {
    localStorage.removeItem('timer_DC');
    localStorage.removeItem('currentTypesCombination_DC');
    localStorage.removeItem('correctOption_DC');
    localStorage.removeItem('gameState_DC');
    localStorage.removeItem('availableLevelCombinations_DC');
    localStorage.removeItem('scorePoints_DC');
    localStorage.removeItem('HP_DC');
    localStorage.removeItem('level_DC');
    localStorage.removeItem('difficulty_DC');
  };

  const saveGameStateToStorage = (
    newAvailableNumbers,
    newCorrectOption,
    newCurrentTypeCombination
  ) => {
    localStorage.setItem('scorePoints_DC', scorePoints);
    localStorage.setItem('HP_DC', HP);
    localStorage.setItem('difficulty_DC', difficulty);
    localStorage.setItem(
      'currentTypesCombination_DC',
      JSON.stringify(newCurrentTypeCombination)
    );
    localStorage.setItem('correctOption_DC', newCorrectOption);
    localStorage.setItem(
      'availableLevelCombinations_DC',
      JSON.stringify(newAvailableNumbers)
    );
    localStorage.setItem('level_DC', level);
    localStorage.setItem('gameState_DC', GAME_STATES.LEVEL_INFO);
  };

  const loadNewLevel = async (firstSetup) => {
    let availableTypeCombinations = firstSetup
      ? getInitialAvailableTypeCombinations()
      : availableLevelCombinations;
    const { randomTypeCombination, randomTypeIndex } =
      generateRandomAvailableTypeCombination(availableTypeCombinations);
    setCurrentTypesCombination(randomTypeCombination);
    setCorrectOption(
      getTypesCombinationDamageCorrectOption(randomTypeCombination)
    );
    setGameState(GAME_STATES.LEVEL_INFO);
    let newAvailableNumbers = updateAvailables(
      availableTypeCombinations,
      randomTypeIndex
    );
    saveGameStateToStorage(
      newAvailableNumbers,
      getTypesCombinationDamageCorrectOption(randomTypeCombination),
      randomTypeCombination
    );
  };

  const updateAvailables = (availableTypeCombinations, indexToRemove) => {
    availableTypeCombinations.splice(indexToRemove, 1);
    setAvailableLevelCombinations(availableTypeCombinations);
    return availableTypeCombinations;
  };

  const getInitialAvailableTypeCombinations = () => {
    let availableNumbers = [];
    if (difficulty === DIFFICULTY_LEVELS.HARD) {
      for (let attack = 0; attack < types.length; attack++) {
        for (
          let firstDefense = 0;
          firstDefense < types.length;
          firstDefense++
        ) {
          for (
            let secondDefense = firstDefense + 1;
            secondDefense < types.length;
            secondDefense++
          ) {
            availableNumbers.push([attack, firstDefense, secondDefense]);
          }
        }
      }
    } else if (difficulty === DIFFICULTY_LEVELS.EASY) {
      for (let attack = 0; attack < types.length; attack++) {
        for (
          let firstDefense = 0;
          firstDefense < types.length;
          firstDefense++
        ) {
          availableNumbers.push([attack, firstDefense, null]);
        }
      }
    }
    return availableNumbers;
  };

  useEffect(() => {
    if (difficulty) {
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
    }
  }, [gameState, difficulty]);

  const easyOptions = () => [
    TYPE_EFFECTIVENESS_OPTION.NO_DAMAGE,
    TYPE_EFFECTIVENESS_OPTION.HALF_DAMAGE,
    TYPE_EFFECTIVENESS_OPTION.REGULAR_DAMAGE,
    TYPE_EFFECTIVENESS_OPTION.DOUBLE_DAMAGE,
  ];

  const hardOptions = () => [
    TYPE_EFFECTIVENESS_OPTION.NO_DAMAGE,
    TYPE_EFFECTIVENESS_OPTION.QUARTER_DAMAGE,
    TYPE_EFFECTIVENESS_OPTION.HALF_DAMAGE,
    TYPE_EFFECTIVENESS_OPTION.REGULAR_DAMAGE,
    TYPE_EFFECTIVENESS_OPTION.DOUBLE_DAMAGE,
    TYPE_EFFECTIVENESS_OPTION.QUADRUPLE_DAMAGE,
  ];

  const getOptions = () => {
    return difficulty === DIFFICULTY_LEVELS.EASY
      ? easyOptions()
      : hardOptions();
  };

  const getGameScene = () => (
    <>
      <Types
        typesCombinations={currentTypesCombination}
        loading={gameState === GAME_STATES.LEVEL_SETUP}></Types>
      <TypeEffectivenessOptions
        correctOption={correctOption}
        validation={gameState === GAME_STATES.VALIDATION}
        loading={gameState === GAME_STATES.LEVEL_SETUP}
        handleClickOption={handleClickOption}
        options={getOptions()}
      />
    </>
  );

  const goToGame = (difficulty) => {
    setDifficulty(difficulty);
    setGameState(GAME_STATES.LEVEL_SETUP);
    startTimerCountdown();
  };

  const handleHeaderBackAndResetDifficulty = () => {
    localStorage.removeItem('difficulty');
    handleHeaderBack();
  };

  const handleTimerCountdownInterval = () => {
    setTimer((timer) => {
      let newTimer = timer - 1;
      if (newTimer <= 0) {
        loseGame();
      } else {
        localStorage.setItem('timer_DC', newTimer);
      }
      return newTimer;
    });
  };

  const startTimerCountdown = () => {
    timerCountdown.current = setInterval(handleTimerCountdownInterval, 1000);
  };

  useEffect(() => {
    if (gameState !== GAME_STATES.SELECT_DIFFICULTY) {
      startTimerCountdown();
    }
    return () => {
      clearInterval(timerCountdown.current);
    };
  }, []);

  return (
    <>
      <Header
        handleHeaderBack={handleHeaderBackAndResetDifficulty}
        inGame={true}
        HP={HP}
        scorePoints={scorePoints}
        timer={timer}></Header>
      <Content onClick={handleAppTap}>
        {' '}
        {gameState === GAME_STATES.YOU_LOSE ? (
          <YouLose
            scorePoints={scorePoints}
            difficulty={difficulty}
            gameMode={GAME_MODES.DAMAGE_CALCULATOR}
            restartGame={restartGame}
          />
        ) : errorMessage ? (
          <Error message={errorMessage}></Error>
        ) : gameState === GAME_STATES.SELECT_DIFFICULTY ? (
          <DifficultySelector goToGame={goToGame} />
        ) : (
          getGameScene()
        )}
      </Content>
    </>
  );
};
