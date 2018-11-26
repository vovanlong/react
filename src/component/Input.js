import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

export default class Input extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                    placeholder="Enter Name"
                    returnKeyLabel={"next"}
                    onChangeText={(text) => this.setState({ text })}></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textInputStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        height: 56,
        marginBottom: 6,
        backgroundColor: '#00bcd4'
    }
});
