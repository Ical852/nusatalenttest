import {call, put, takeEvery} from 'redux-saga/effects';

import {
  fetchNextPrevPokemonsData,
  fetchPokemonsByName,
  fetchPokemonsCategory,
  fetchPokemonsData,
} from '../actions';

import {
  GET_NEXT_PREV_POKEMONS,
  GET_NEXT_PREV_POKEMONS_FAILED,
  GET_NEXT_PREV_POKEMONS_SUCCESS,
  GET_POKEMONS,
  GET_POKEMONS_BY_NAME,
  GET_POKEMONS_BY_NAME_FAILED,
  GET_POKEMONS_BY_NAME_SUCCESS,
  GET_POKEMONS_CATEGORY,
  GET_POKEMONS_CATEGORY_FAILED,
  GET_POKEMONS_CATEGORY_SUCCESS,
  GET_POKEMONS_FAILED,
  GET_POKEMONS_SUCCESS,
  SET_LOADING,
} from '../actTypes';

function* getPokemonsData() {
  try {
    yield put({type: SET_LOADING, value: true});
    const pokemons = yield call(fetchPokemonsData);
    yield put({type: GET_POKEMONS_SUCCESS, pokemons});
    yield put({type: SET_LOADING, value: false});
  } catch (error) {
    yield put({type: SET_LOADING, value: false});
    yield put({type: GET_POKEMONS_FAILED, message: error.message});
  }
}

function* getNextPrevPokemons(action) {
  try {
    yield put({type: SET_LOADING, value: true});
    const pokemons = yield call(fetchNextPrevPokemonsData, action.payload.url);
    yield put({type: GET_NEXT_PREV_POKEMONS_SUCCESS, pokemons});
    yield put({type: SET_LOADING, value: false});
  } catch (error) {
    yield put({type: SET_LOADING, value: false});
    yield put({type: GET_NEXT_PREV_POKEMONS_FAILED, message: error.message});
  }
}

function* getPokemonsCategory(action) {
  try {
    yield put({type: SET_LOADING, value: true});
    const pokemons = yield call(fetchPokemonsCategory, action.payload.id);
    yield put({type: GET_POKEMONS_CATEGORY_SUCCESS, pokemons});
    yield put({type: SET_LOADING, value: false});
  } catch (error) {
    yield put({type: SET_LOADING, value: false});
    yield put({type: GET_POKEMONS_CATEGORY_FAILED, message: error.message});
  }
}

function* getPokemonByName(action) {
  try {
    yield put({type: SET_LOADING, value: true});
    const pokemons = yield call(fetchPokemonsByName, action.payload.name);
    yield put({type: GET_POKEMONS_BY_NAME_SUCCESS, pokemons});
    yield put({type: SET_LOADING, value: false});
  } catch (error) {
    yield put({type: SET_LOADING, value: false});
    yield put({type: GET_POKEMONS_BY_NAME_FAILED, message: error.message});
  }
}

function* appSaga() {
  yield takeEvery(GET_POKEMONS, getPokemonsData);
  yield takeEvery(GET_NEXT_PREV_POKEMONS, getNextPrevPokemons);
  yield takeEvery(GET_POKEMONS_CATEGORY, getPokemonsCategory);
  yield takeEvery(GET_POKEMONS_BY_NAME, getPokemonByName);
}

export default appSaga;
