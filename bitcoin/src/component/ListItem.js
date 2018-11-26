import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

export default class ListItem extends Component<Props> {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{item.name}</Text>
        <Text style={styles.welcome}>{item.id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    margin: 10
  }
});
