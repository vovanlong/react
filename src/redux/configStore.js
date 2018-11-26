import { createStore, combineReducers } from 'redux';

import coinItems from '../redux/reducers/coinItems';

const store = createStore(coinItems, {});
export default store;
