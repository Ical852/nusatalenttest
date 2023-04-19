import axios from 'axios';
import {APP_URL} from '../utils';

export const action = async url => {
  return await axios
    .get(APP_URL + url)
    .then(res => {
      return res;
    })
    .catch(err => {
      throw err;
    });
};
