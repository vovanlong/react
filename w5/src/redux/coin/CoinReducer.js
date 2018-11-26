import {ACTION_ERROR, ACTION_LIKE, ACTION_START, ACTION_SUCCESS} from "../actions";

export const coinStateDefault = {
    loading: false,
    data: [],
    error: null
};
/**
 * {...state, value: state.value + 1}
 * Copy toan bo state, chi thay doi value
 * @param state
 * @param action
 * @returns {{value: number}}
 */
export const coinReducer = (state = coinStateDefault, action) => {
    switch (action.type) {
        case ACTION_START:
            //Show progress bar
            return {...state, loading: true};
        case ACTION_SUCCESS:
            //Return data & dismiss progress bar
            return {...state, loading: false, data: action.data};
        case ACTION_ERROR:
            //Return error & dismiss progress bar
            return {...state, loading: false, error: action.error};
        case ACTION_LIKE:
            const {index, value} = action;
            //Pure function
            // let data = state.data; -> not use
            let data = [...state.data];
            data[index].like = value;
            return {...state, data: data};
        default:
            return state;
    }
};

