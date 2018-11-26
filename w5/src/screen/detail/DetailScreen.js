import React, {Component} from 'react';
import {
    View,
    StyleSheet, Text
} from 'react-native';
import CoinDao from "../../db/dao/CoinDao";

export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.coinDao = new CoinDao();
    }

    componentDidMount() {
        const coins = this.coinDao.getAll();
        this.setState({count: coins.length});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>{this.state.count}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

