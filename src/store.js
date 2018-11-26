import { AsyncStorage } from 'react-native';

const MODE_KEY = 'mode';
const TOKEN_KEY = 'token';


export const saveMode = (mode) => {
    return AsyncStorage.setItem(MODE_KEY, mode);
};

export const saveToken = (token) => {
    return AsyncStorage.setItem(TOKEN_KEY, token);
};


/**
 * get mode from local
 * @returns {Promise}
 */
export const getMode = () => {
    return AsyncStorage.getItem(MODE_KEY);
};

export const getToken = () => {
    return AsyncStorage.getItem(TOKEN_KEY);
};
