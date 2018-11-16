import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import TodoApp from './src/TodoApp';
import store from './src/store';
import { Provider } from 'react-redux';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
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
