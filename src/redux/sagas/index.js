import {call, put, takeEvery} from 'redux-saga/effects';

import {fetchNextPrevPokemonsData, fetchPokemonsData} from '../actions';
import {
  GET_NEXT_PREV_POKEMONS,
  GET_NEXT_PREV_POKEMONS_FAILED,
  GET_NEXT_PREV_POKEMONS_SUCCESS,
  GET_POKEMONS,
  GET_POKEMONS_FAILED,
  GET_POKEMONS_SUCCESS,
} from '../actTypes';

function* getPokemonsData() {
  try {
    const pokemons = yield call(fetchPokemonsData);
    yield put({type: GET_POKEMONS_SUCCESS, pokemons});
  } catch (error) {
    yield put({type: GET_POKEMONS_FAILED, message: error.message});
  }
}

function* getNextPrevPokemons(action) {
  try {
    const pokemons = yield call(fetchNextPrevPokemonsData, action.payload.url);
    yield put({type: GET_NEXT_PREV_POKEMONS_SUCCESS, pokemons});
  } catch (error) {
    yield put({type: GET_NEXT_PREV_POKEMONS_FAILED, message: error.message});
  }
}

function* appSaga() {
  yield takeEvery(GET_POKEMONS, getPokemonsData);
  yield takeEvery(GET_NEXT_PREV_POKEMONS, getNextPrevPokemons);
}

export default appSaga;
