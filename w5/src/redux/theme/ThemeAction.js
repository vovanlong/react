import {ACTION_CHANGE_MODE, ACTION_INCREASE} from "../actions";

export const increase = () => {
    return {
        type: ACTION_INCREASE
    }
};

export const decrease = () => {
    return {
        type: 'DECREASE'
    }
};

export const setValue = (value) => {
    return {
        type: 'SET',
        value: value
    }
};

export const changeTheme = (theme) => {
    return {
        type: ACTION_CHANGE_MODE,
        theme
    }
};

