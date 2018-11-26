import { FETCHING, FETCH_FAIL, FETCH_OK } from '../actions/types';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const DEFAULT_STATE = {
  data: [{ "toUser": "Long", "fromUser": "Phuong", "message": "Dan Ba la doi tra", "dateTime": "2018-11-19T03:16:21.514Z" }, { "toUser": "Long", "fromUser": "Phuong", "message": "Dan Ba la doi tra", "dateTime": "2018-11-19T03:16:21.514Z" }, { "toUser": "Long", "fromUser": "Phuong", "message": "Dan Ba la doi tra", "dateTime": "2018-11-19T03:16:21.514Z" }, { "toUser": "PHUDUC", "fromUser": "Phuong", "message": "Dan Ba la doi tra", "dateTime": "2018-11-19T03:16:21.514Z" }, { "toUser": "PHUDUC", "fromUser": "Phuong", "message": "Dan Ba la doi tra", "dateTime": "2018-11-19T03:16:21.514Z" }],
  isFetching: false,
  dataFetched: false,
  error: false
};

const coinItems = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, isFetching: true };
    case FETCH_OK:
      return { ...state, data: action.payload, isFetching: false };
    case FETCH_FAIL:
      return { ...state, isFetching: false, error: true };
    default:
      return state;
  }
};

export const store = createStore(coinItems, applyMiddleware(thunk))
