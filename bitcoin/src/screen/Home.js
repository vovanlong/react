import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { fetchNews } from '../api';
import ListItem from '../component/ListItem';
import { navigationOptions } from 'react-navigation';

const API_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=100';
export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const data = Promise.resolve(fetchNews(API_URL, 'GET'));
    data.then(value => {
      this.setState({
        data: value
      });
      console.log(this.state.data);
    });
  }

  _keyExtractor = (it, index) => {
    return it.name;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => {
            return <ListItem item={item} index={index} />;
          }}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
