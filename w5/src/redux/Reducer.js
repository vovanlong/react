import {applyMiddleware, combineReducers, createStore} from 'redux';
import {coinReducer} from "./coin/CoinReducer";
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from "react-navigation-redux-helpers";
import {themeReducer} from "./theme/ThemeReducer";
import thunk from "redux-thunk";
import {navReducer} from "../router/NavigationReducer";
import {MainRouter} from "../router/MainRouter";
import {connect} from "react-redux";
/**
 * store after combine
 * @type {{coin: {loading: boolean, data: Array, error: null}, theme: {value: number, theme: string}}}
 */
const stateDefault = {
    coin: {
        loading: false,
        data: [],
        error: null
    },
    theme: {
        value: 0,
        theme: 'light'
    }
};
const reducer = combineReducers({
    coin: coinReducer,
    theme: themeReducer,
    nav: navReducer,
});

const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export const store = createStore(reducer, applyMiddleware(thunk, navMiddleware));

const AppNav = reduxifyNavigator(MainRouter, "root");

const mapStateToProps = (state) => ({
    state: state.nav,
});

export const AppWithNavigationState = connect(mapStateToProps)(AppNav);

