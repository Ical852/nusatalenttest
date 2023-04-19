import {combineReducers} from 'redux';
import {homeReducers} from './home';

const reducer = combineReducers({
  homeReducers,
});

export default reducer;
