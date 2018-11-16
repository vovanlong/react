import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux';

import { addTodo } from '../actions/index';

type Props = {};
class AddTodo extends Component<Props> {
  state = {
    text: ''
  };

  addTodo = text => {
    this.props.dispatch(addTodo(text));
    this.setState({ text: '' });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder="Create new video"
          style={styles.input}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View
            style={{
              height: 50,
              backgroundColor: '#eaeaea',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Icon
              name="plus"
              size={30}
              style={{ color: '#de9595', padding: 10 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTodo);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  input: {
    borderWidth: 1,
    borderColor: '#f2f2e1',
    backgroundColor: '#eaeaea',
    height: 50,
    flex: 1,
    padding: 5
  }
});
