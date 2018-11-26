import {StackActions, NavigationActions} from "react-navigation";

export const navigateToPage = (pageName, data) => {
    return NavigationActions.navigate({
        routeName: pageName,
        params: data
    })
};

export const goBack = (key) => {
    return NavigationActions.back({key})
};

export const resetPage = (page) => {
    return StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: page})],
    });
};

export const pushScreen = (screen, params) => {
    return StackActions.push({
        routeName: screen,
        params,
    });
};

export const popScreen = (index = 1) => {
    return StackActions.pop({
        n: index,
    });
};