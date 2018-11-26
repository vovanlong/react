import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import CryptoIcon from 'react-native-crypto-icons'


export default class ListItem extends Component {
  render() {
    const { item, index } = this.props;
    const symbol = item.symbol

    // const newsymbol = symbol.toLowerCase()
    // console.log(newsymbol)
    const percent_change = item.percent_change_24h < 0 ? 'red' : 'green'
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome]}>{index + 1}</Text>
        <Text style={[styles.welcome, { width: 70 }]}>{item.name} <CryptoIcon name='btc'></CryptoIcon></Text>

        <Text style={styles.welcome}>{item.market_cap_usd}</Text>
        <Text style={styles.welcome}>{item.price_usd}</Text>
        <Text style={[styles.welcome, { color: percent_change }]}>{item.percent_change_24h}</Text>
        <Text style={styles.welcome}>{item.total_supply}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: '#E0E3E9',
    borderBottomColor: '#E0E3E9',
    paddingBottom: 15,
    paddingTop: 15,
  },
  welcome: {
    fontSize: 10,
    margin: 10,
    color: '#1D1D20',

  }
});
