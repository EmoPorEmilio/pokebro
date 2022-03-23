export const types = [
  {
    id: 1,
    name: 'normal',
    printName: 'NORMAL',
    color: '#A8A878',
    damage_relations: {
      double_damage_from: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
      ],
      double_damage_to: [],
      half_damage_from: [],
      half_damage_to: [
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
      ],
      no_damage_from: [
        {
          name: 'ghost',
          url: 'https://pokeapi.co/api/v2/type/8/',
        },
      ],
      no_damage_to: [
        {
          name: 'ghost',
          url: 'https://pokeapi.co/api/v2/type/8/',
        },
      ],
    },
  },
  {
    id: 2,
    name: 'fighting',
    printName: 'LUCHA',
    color: '#C03028',
    damage_relations: {
      double_damage_from: [
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
        {
          name: 'psychic',
          url: 'https://pokeapi.co/api/v2/type/14/',
        },
        {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      ],
      double_damage_to: [
        {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
        {
          name: 'dark',
          url: 'https://pokeapi.co/api/v2/type/17/',
        },
      ],
      half_damage_from: [
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'dark',
          url: 'https://pokeapi.co/api/v2/type/17/',
        },
      ],
      half_damage_to: [
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'psychic',
          url: 'https://pokeapi.co/api/v2/type/14/',
        },
        {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      ],
      no_damage_from: [],
      no_damage_to: [
        {
          name: 'ghost',
          url: 'https://pokeapi.co/api/v2/type/8/',
        },
      ],
    },
  },
  {
    id: 3,
    name: 'flying',
    printName: 'VOLADOR',
    color: '#a890f0',
    damage_relations: {
      double_damage_from: [
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
      ],
      double_damage_to: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      ],
      half_damage_from: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      ],
      half_damage_to: [
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
      ],
      no_damage_from: [
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
      ],
      no_damage_to: [],
    },
  },
  {
    id: 4,
    name: 'poison',
    printName: 'VENENO',
    color: '#a040a0',
    damage_relations: {
      double_damage_from: [
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
        {
          name: 'psychic',
          url: 'https://pokeapi.co/api/v2/type/14/',
        },
      ],
      double_damage_to: [
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      ],
      half_damage_from: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      ],
      half_damage_to: [
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'ghost',
          url: 'https://pokeapi.co/api/v2/type/8/',
        },
      ],
      no_damage_from: [],
      no_damage_to: [
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
      ],
    },
  },
  {
    id: 5,
    name: 'ground',
    printName: 'TIERRA',
    color: '#e0c068',
    damage_relations: {
      double_damage_from: [
        {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
      ],
      double_damage_to: [
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
        {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
      ],
      half_damage_from: [
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
      ],
      half_damage_to: [
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      ],
      no_damage_from: [
        {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
      ],
      no_damage_to: [
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      ],
    },
  },
  {
    id: 6,
    name: 'rock',
    printName: 'ROCA',
    color: '#b8a038',
    damage_relations: {
      double_damage_from: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      ],
      double_damage_to: [
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
      ],
      half_damage_from: [
        {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      ],
      half_damage_to: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
      ],
      no_damage_from: [],
      no_damage_to: [],
    },
  },
  {
    id: 7,
    name: 'bug',
    printName: 'BICHO',
    color: '#a8b820',
    damage_relations: {
      double_damage_from: [
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      ],
      double_damage_to: [
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'psychic',
          url: 'https://pokeapi.co/api/v2/type/14/',
        },
        {
          name: 'dark',
          url: 'https://pokeapi.co/api/v2/type/17/',
        },
      ],
      half_damage_from: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      ],
      half_damage_to: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
        {
          name: 'ghost',
          url: 'https://pokeapi.co/api/v2/type/8/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
        {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      ],
      no_damage_from: [],
      no_damage_to: [],
    },
  },
  {
    id: 8,
    name: 'ghost',
    printName: 'FANTASMA',
    color: '#705898',
    damage_relations: {
      double_damage_from: [
        {
          name: 'ghost',
          url: 'https://pokeapi.co/api/v2/type/8/',
        },
        {
          name: 'dark',
          url: 'https://pokeapi.co/api/v2/type/17/',
        },
      ],
      double_damage_to: [
        {
          name: 'ghost',
          url: 'https://pokeapi.co/api/v2/type/8/',
        },
        {
          name: 'psychic',
          url: 'https://pokeapi.co/api/v2/type/14/',
        },
      ],
      half_damage_from: [
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
      ],
      half_damage_to: [
        {
          name: 'dark',
          url: 'https://pokeapi.co/api/v2/type/17/',
        },
      ],
      no_damage_from: [
        {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
      ],
      no_damage_to: [
        {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      ],
    },
  },
  {
    id: 9,
    name: 'steel',
    printName: 'ACERO',
    color: '#b8b8d0',
    damage_relations: {
      double_damage_from: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      ],
      double_damage_to: [
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
        {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      ],
      half_damage_from: [
        {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'psychic',
          url: 'https://pokeapi.co/api/v2/type/14/',
        },
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
        {
          name: 'dragon',
          url: 'https://pokeapi.co/api/v2/type/16/',
        },
        {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      ],
      half_damage_to: [
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
        {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
        {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
      ],
      no_damage_from: [
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      ],
      no_damage_to: [],
    },
  },
  {
    id: 10,
    name: 'fire',
    printName: 'FUEGO',
    color: '#f08030',
    damage_relations: {
      double_damage_from: [
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      ],
      double_damage_to: [
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
      ],
      half_damage_from: [
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
        {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      ],
      half_damage_to: [
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
        {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
        {
          name: 'dragon',
          url: 'https://pokeapi.co/api/v2/type/16/',
        },
      ],
      no_damage_from: [],
      no_damage_to: [],
    },
  },
  {
    id: 11,
    name: 'water',
    printName: 'AGUA',
    color: '#6890f0',
    damage_relations: {
      double_damage_from: [
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
      ],
      double_damage_to: [
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      ],
      half_damage_from: [
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
        {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
      ],
      half_damage_to: [
        {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'dragon',
          url: 'https://pokeapi.co/api/v2/type/16/',
        },
      ],
      no_damage_from: [],
      no_damage_to: [],
    },
  },
  {
    id: 12,
    name: 'grass',
    printName: 'PLANTA',
    color: '#78c850',
    damage_relations: {
      double_damage_from: [
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
      ],
      double_damage_to: [
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      ],
      half_damage_from: [
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
        {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
      ],
      half_damage_to: [
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'dragon',
          url: 'https://pokeapi.co/api/v2/type/16/',
        },
      ],
      no_damage_from: [],
      no_damage_to: [],
    },
  },
  {
    id: 13,
    name: 'electric',
    printName: 'ELÉCTRICO',
    color: '#f8d030',
    damage_relations: {
      double_damage_from: [
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
      ],
      double_damage_to: [
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
        {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
      ],
      half_damage_from: [
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
      ],
      half_damage_to: [
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
        {
          name: 'dragon',
          url: 'https://pokeapi.co/api/v2/type/16/',
        },
      ],
      no_damage_from: [],
      no_damage_to: [
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
      ],
    },
  },
  {
    id: 14,
    name: 'psychic',
    printName: 'PSÍQUICO',
    color: '#f85888',
    damage_relations: {
      double_damage_from: [
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'ghost',
          url: 'https://pokeapi.co/api/v2/type/8/',
        },
        {
          name: 'dark',
          url: 'https://pokeapi.co/api/v2/type/17/',
        },
      ],
      double_damage_to: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
      ],
      half_damage_from: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'psychic',
          url: 'https://pokeapi.co/api/v2/type/14/',
        },
      ],
      half_damage_to: [
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'psychic',
          url: 'https://pokeapi.co/api/v2/type/14/',
        },
      ],
      no_damage_from: [],
      no_damage_to: [
        {
          name: 'dark',
          url: 'https://pokeapi.co/api/v2/type/17/',
        },
      ],
    },
  },
  {
    id: 15,
    name: 'ice',
    printName: 'HIELO',
    color: '#98d8d8',
    damage_relations: {
      double_damage_from: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'rock',
          url: 'https://pokeapi.co/api/v2/type/6/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      ],
      double_damage_to: [
        {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
        {
          name: 'ground',
          url: 'https://pokeapi.co/api/v2/type/5/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'dragon',
          url: 'https://pokeapi.co/api/v2/type/16/',
        },
      ],
      half_damage_from: [
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
      ],
      half_damage_to: [
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
        {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
      ],
      no_damage_from: [],
      no_damage_to: [],
    },
  },
  {
    id: 16,
    name: 'dragon',
    printName: 'DRAGÓN',
    color: '#7038f8',
    damage_relations: {
      double_damage_from: [
        {
          name: 'ice',
          url: 'https://pokeapi.co/api/v2/type/15/',
        },
        {
          name: 'dragon',
          url: 'https://pokeapi.co/api/v2/type/16/',
        },
        {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      ],
      double_damage_to: [
        {
          name: 'dragon',
          url: 'https://pokeapi.co/api/v2/type/16/',
        },
      ],
      half_damage_from: [
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
        {
          name: 'water',
          url: 'https://pokeapi.co/api/v2/type/11/',
        },
        {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
        {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/',
        },
      ],
      half_damage_to: [
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
      ],
      no_damage_from: [],
      no_damage_to: [
        {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      ],
    },
  },
  {
    id: 17,
    name: 'dark',
    printName: 'SINIESTRO',
    color: '#705848',
    damage_relations: {
      double_damage_from: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      ],
      double_damage_to: [
        {
          name: 'ghost',
          url: 'https://pokeapi.co/api/v2/type/8/',
        },
        {
          name: 'psychic',
          url: 'https://pokeapi.co/api/v2/type/14/',
        },
      ],
      half_damage_from: [
        {
          name: 'ghost',
          url: 'https://pokeapi.co/api/v2/type/8/',
        },
        {
          name: 'dark',
          url: 'https://pokeapi.co/api/v2/type/17/',
        },
      ],
      half_damage_to: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'dark',
          url: 'https://pokeapi.co/api/v2/type/17/',
        },
        {
          name: 'fairy',
          url: 'https://pokeapi.co/api/v2/type/18/',
        },
      ],
      no_damage_from: [
        {
          name: 'psychic',
          url: 'https://pokeapi.co/api/v2/type/14/',
        },
      ],
      no_damage_to: [],
    },
  },
  {
    id: 18,
    name: 'fairy',
    printName: 'HADA',
    color: '#ee99ac',
    damage_relations: {
      double_damage_from: [
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
      ],
      double_damage_to: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'dragon',
          url: 'https://pokeapi.co/api/v2/type/16/',
        },
        {
          name: 'dark',
          url: 'https://pokeapi.co/api/v2/type/17/',
        },
      ],
      half_damage_from: [
        {
          name: 'fighting',
          url: 'https://pokeapi.co/api/v2/type/2/',
        },
        {
          name: 'bug',
          url: 'https://pokeapi.co/api/v2/type/7/',
        },
        {
          name: 'dark',
          url: 'https://pokeapi.co/api/v2/type/17/',
        },
      ],
      half_damage_to: [
        {
          name: 'poison',
          url: 'https://pokeapi.co/api/v2/type/4/',
        },
        {
          name: 'steel',
          url: 'https://pokeapi.co/api/v2/type/9/',
        },
        {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      ],
      no_damage_from: [
        {
          name: 'dragon',
          url: 'https://pokeapi.co/api/v2/type/16/',
        },
      ],
      no_damage_to: [],
    },
  },
];
