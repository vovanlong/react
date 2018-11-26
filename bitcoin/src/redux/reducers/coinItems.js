import { FETCHING, FETCH_FAIL, FETCH_OK } from '../actions/types';

const DEFAULT_STATE = {
  data: [],
  isFetching: false,
  dataFetched: false,
  error: false
};

const coinItems = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, isFetching: true, data: [] };
    case FETCH_OK:
      return { ...state, data: action.payload, isFetching: false };
    case FETCH_FAIL:
      return { ...state, isFetching: false, error: true };
    default:
      state;
  }
};

export default coinItems;
