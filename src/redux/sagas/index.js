import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchPokemonsData } from '../actions';
import {
    GET_POKEMONS,
    GET_POKEMONS_FAILED,
    GET_POKEMONS_SUCCESS
} from '../actTypes';

function* getPokemonsData() {
    try {
        const pokemons = yield call(fetchPokemonsData);
        yield put({ type: GET_POKEMONS_SUCCESS, pokemons });
    } catch (error) {
        yield put({ type: GET_POKEMONS_FAILED, message: error.message });
    }
}

function* appSaga() {
    yield takeEvery(GET_POKEMONS, getPokemonsData);
}

export default appSaga;