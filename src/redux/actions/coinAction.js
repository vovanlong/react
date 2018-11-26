import { FETCHING, FETCH_FAIL, FETCH_OK } from './types';
import { getToken } from '../../store';
import { getListCoin } from '../../api';


export const getData = () => {
  return {
    type: FETCHING
  };
}

export const getDataSuccess = (data) => {
  return {
    type: FETCH_OK,
    payload: data
  };
}

export const getDataFail = () => {
  return {
    type: FETCH_FAIL
  };
}


export const actionGetCoins = () => {
  return (dispatch) => {
    dispatch(getData());
    getListCoin().then(data => {
      dispatch(getDataSuccess(data))
    }).catch(error => {
      dispatch(getDataFail(error))
    })
  }
}
