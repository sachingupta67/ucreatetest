import {Alert} from 'react-native';
import constants from '../constants';
import {getData} from '../../helpers/utility';

const errorHandling = error => {
  if (error.response) {
    return error.response.data.message || 'Response not found';
  } else if (error.request) {
    return 'Request Failed';
  } else {
    return 'Try after sometime';
  }
};

const errorResHandler = err => {
  Alert.alert(errorHandling(err));
};
export const getDetails = () => async dispatch => {
  console.log('hittt====>');
  try {
    let data = (await getData('@details')) || {};

    dispatch({type: constants.GET, payload: data});
  } catch (err) {
    errorResHandler(err);
  }
};
