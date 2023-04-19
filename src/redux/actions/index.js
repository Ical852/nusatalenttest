import {action, fullUrlAction} from '../../services';

export const fetchPokemonsData = async () => {
  try {
    const response = await action('pokemon');
    return response.data;
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
