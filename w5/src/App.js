import React, {Component} from 'react';
import LoadingView from "./components/LoadingView";
import {View} from 'react-native';
import {AppWithNavigationState} from "./redux/Reducer";
import {realm} from "./db/Realm";

type Props = {};

export default class App extends Component<Props> {

    componentDidMount() {

    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <LoadingView/>
                {/*<MainRouter/>*/}
                <AppWithNavigationState/>
            </View>
        );
    }
}

