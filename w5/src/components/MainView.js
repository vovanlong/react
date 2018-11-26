import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {MainRouter} from "../router/MainRouter";

export default class MainView extends Component {



    render() {
        return (
            <MainRouter/>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

