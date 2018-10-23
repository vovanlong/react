/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow JSX
 */

import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 40
                    }}
                >Number {this.state.number}</Text>
                <TouchableOpacity
                    onPress={this.onButtonClick}
                >
                    <Text style={{
                        color: '#ff0000',
                        fontSize: 50
                    }}
                    >Button</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onButtonClick = () => {
        setInterval(() => {
            this.setState({number: this.state.number + 1});
        }, 1000);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
