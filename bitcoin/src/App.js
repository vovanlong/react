import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigateCoin from './NavigateCoin';
import { Provider } from 'react-redux';
import store from './redux/configStore';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigateCoin />
      </Provider>
    );
  }
}
