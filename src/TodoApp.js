import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';

type Props = {};
class TodoApp extends Component<Props> {
  state = {
    todos: [],
    visibilityFilter: 'SHOW_ALL_TODOS'
  };
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <View>
          <VisibleTodos />
        </View>
      </View>
    );
  }
}
export default TodoApp;
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
