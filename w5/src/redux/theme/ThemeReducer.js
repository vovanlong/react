import {ACTION_CHANGE_MODE, ACTION_INCREASE} from "../actions";

export const themeStateDefault = {
    value: 0,
    theme: 'light'
};
/**
 * {...state, value: state.value + 1}
 * Copy toan bo state, chi thay doi value
 * @param state
 * @param action
 * @returns {{value: number}}
 */
export const themeReducer = (state = themeStateDefault, action) => {
    switch (action.type) {
        case ACTION_INCREASE:
            return {...state, value: state.value + 1};
        case 'DECREASE':
            return {...state, value: state.value - 1};
        case 'SET':
            return {...state, value: action.value};
        case ACTION_CHANGE_MODE:
            return {...state, theme: action.theme};
        default:
            return state;
    }
};

