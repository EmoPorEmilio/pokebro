export const theme = {
  background: '#202020',
  backgroundLight: '#515151',
  accent: '#ebbed2',
  cardsBackground: '#373737',
  cardsBackgroundLoad: '#484848',
};

export const MAX_POKES = 898;

export const MAX_TRIES_IF_ERROR = 5;

export const ERROR_MESSAGES = {
  NO_POKEMON_IMAGE: 'El Pokémon está tímido y no sale :( Vuelve más tarde.',
  NO_POKEMON_NAMES:
    'Los Pokémon se liberaron y están causando estragos :( Vuelve más tarde.',
};

export const SYSTEM_MESSAGES = {
  RETRY: '¿Reintentar?',
  UNAVAILABLE: '¡Próximamente! :)',
};

export const TYPE_EFFECTIVENESS_OPTION = {
  QUARTER_DAMAGE: 'x1/4',
  HALF_DAMAGE: 'x1/2',
  NO_DAMAGE: 'x0',
  REGULAR_DAMAGE: 'x1',
  DOUBLE_DAMAGE: 'x2',
  QUADRUPLE_DAMAGE: 'x4',
};

export const GAME_STATES = {
  LEVEL_SETUP: 'setup',
  LEVEL_INFO: 'info',
  VALIDATION: 'validation',
  YOU_LOSE: 'youLose',
};
