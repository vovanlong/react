import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

export default class LayoutExample extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view_1}/>
                <View style={styles.view_2}>
                    <View style={styles.child_1}/>
                    <View style={styles.child_2}/>
                    <View style={styles.child_3}/>
                </View>
                <View style={styles.view_3}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view_1: {
        flex: 1,
        backgroundColor: '#ff4b2d'
    },
    view_2: {
        flex: 2,
        backgroundColor: '#57ff59',
        flexDirection: 'row'
    },
    view_3: {
        flex: 1,
        backgroundColor: '#4837ff'
    },
    child_1: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    child_2: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    child_3: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});

