export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAILED = 'GET_POKEMONS_FAILED';

export const getPokemons = () => ({
  type: GET_POKEMONS,
});

export const GET_POKEMONS_CATEGORY = 'GET_POKEMONS_CATEGORY';
export const GET_POKEMONS_CATEGORY_SUCCESS = 'GET_POKEMONS_CATEGORY_SUCCESS';
export const GET_POKEMONS_CATEGORY_FAILED = 'GET_POKEMONS_CATEGORY_FAILED';

export const getPokemonsCategory = id => ({
  type: GET_POKEMONS_CATEGORY,
  payload: {id},
});

export const GET_POKEMONS_BY_NAME = 'GET_POKEMONS_BY_NAME';
export const GET_POKEMONS_BY_NAME_SUCCESS = 'GET_POKEMONS_BY_NAME_SUCCESS';
export const GET_POKEMONS_BY_NAME_FAILED = 'GET_POKEMONS_BY_NAME_FAILED';

export const getPokemonsByName = name => ({
  type: GET_POKEMONS_BY_NAME,
  payload: {name},
});
