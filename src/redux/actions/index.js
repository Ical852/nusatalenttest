import {action, fullUrlAction} from '../../services';
import {APP_URL} from '../../utils';

export const fetchPokemonsData = async () => {
  try {
    const response = await action('pokemon');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPokemonsCategory = async id => {
  try {
    const response = await action(`type/${id}`);
    const pokemons = {
      results: response.data.pokemon,
    };
    return pokemons;
  } catch (error) {
    throw error;
  }
};

export const fetchPokemonsByName = async name => {
  try {
    const response = await action(`pokemon/${name}`);
    if (response.data !== undefined) {
      const pokemons = {
        results: [
          {
            name: name,
            url: `${APP_URL}pokemon/${response.data.id}/`,
          },
        ],
      };
      return pokemons;
    }
    return {
      results: [],
    };
  } catch (error) {
    throw error;
  }
};

export const fetchNextPrevPokemonsData = async url => {
  try {
    const response = await fullUrlAction(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
