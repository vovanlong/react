import React, {Component, PureComponent} from 'react';
import {
    View,
    StyleSheet, Text,
} from 'react-native';

export default class Item extends PureComponent {

    render() {
        const {name, select} = this.props;
        return (
            <View
                style={styles.item_container}
            >
                <Text style={styles.item_text}>{name} {select}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item_container: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    item_text: {
        fontSize: 20,
        marginLeft: 20,
    }
});

