import { GET_POKEMONS_SUCCESS } from "../actTypes";

const initialState = {
    pokemons: {},
    isLoading: false,
    message: ''
};

export const homeReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS_SUCCESS :
            return {
                ...state,
                pokemons: action.pokemons,
            }
        default:
            return state;
    }
}