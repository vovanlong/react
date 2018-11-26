import { FETCHING, FETCH_FAIL, FETCH_OK } from './types';
import fetchData from '../../api';
export function getData() {
  return {
    type: FETCHING
  };
}

export function getDataSuccess(data) {
  return {
    type: FETCH_OK,
    payload: data
  };
}

export function getDataFail() {
  return {
    type: FETCH_FAIL
  };
}

export function fetchData() {
  return dispatch => {
    dispatch(getData());
  };
}
