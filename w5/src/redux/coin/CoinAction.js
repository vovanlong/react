import {ACTION_ERROR, ACTION_LIKE, ACTION_START, ACTION_SUCCESS} from "../actions";
import {getListCoin} from "../../api/api";
import {getToken} from "../../store";

export const actionStart = () => {
    return {
        type: ACTION_START
    }
};

export const actionSuccess = (data) => {
    return {
        type: ACTION_SUCCESS,
        data
    }
};

export const actionError = (error) => {
    return {
        type: ACTION_ERROR,
        error
    }
};

export const actionLike = (index, value) => {
    return {
        type: ACTION_LIKE,
        index,
        value
    }
};

export const actionGetCoins = () => {
    return (dispatch) => {
        getToken().then(token => {
            //Check token
        });
        dispatch(actionStart());
        //Component: this.props.actionStart();
        getListCoin().then(data => {
            dispatch(actionSuccess(data));
            //Component: this.props.actionSuccess(data);
        }).catch(error => {
            dispatch(actionError(error));
        });
    }
};

