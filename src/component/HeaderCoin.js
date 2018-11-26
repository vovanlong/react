import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class HeaderCoin extends Component {
    render() {
        return (
            <Text style={styles.title}>Market</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        paddingTop: 10,
        fontSize: 25
    }
});
