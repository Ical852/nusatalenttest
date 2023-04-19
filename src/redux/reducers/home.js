import {
  GET_NEXT_PREV_POKEMONS_SUCCESS,
  GET_POKEMONS_BY_NAME_SUCCESS,
  GET_POKEMONS_CATEGORY_SUCCESS,
  GET_POKEMONS_SUCCESS,
} from '../actTypes';

const initialState = {
  pokemons: {
    results: [],
  },
  isLoading: false,
  message: '',
};

export const homeReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.pokemons,
      };
    case GET_NEXT_PREV_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.pokemons,
      };
    case GET_POKEMONS_CATEGORY_SUCCESS:
      return {
        ...state,
        pokemons: action.pokemons,
      };
    case GET_POKEMONS_BY_NAME_SUCCESS:
      return {
        ...state,
        pokemons: action.pokemons,
      };
    default:
      return state;
  }
};
