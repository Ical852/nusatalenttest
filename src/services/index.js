import axios from 'axios';
import {APP_URL} from '../utils';

export const action = async url => {
  try {
    return await axios
      .get(APP_URL + url)
      .then(res => {
        return res;
      })
      .catch(err => {
        throw err;
      });
  } catch (error) {
    return error;
  }
};

export const fullUrlAction = async fullUrl => {
  try {
    return await axios
      .get(fullUrl)
      .then(res => {
        return res;
      })
      .catch(err => {
        throw err;
      });
  } catch (error) {
    return error;
  }
};
