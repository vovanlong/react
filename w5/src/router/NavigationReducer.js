import {MainRouter} from "./MainRouter";

const initialState = MainRouter.router.getStateForAction(MainRouter.router.getActionForPathAndParams('DB'));

export const navReducer = (state = initialState, action) => {
    const nextState = MainRouter.router.getStateForAction(action, state);
    return nextState || state;
};
