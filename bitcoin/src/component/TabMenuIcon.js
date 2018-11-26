import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import PropTypes from 'prop-types';

import { sizeWidth } from '../utils/Size';

export default class TabMenuIcon extends Component {
  render() {
    const { icon, active } = this.props;
    const tintColor = active ? '#2A363B' : '#A8E6CE';
    return (
      <View>
        <Image
          resizeMode={'contain'}
          style={[styles.icon, { tintColor }]}
          source={icon}
        />
      </View>
    );
  }
}

TabMenuIcon.propTypes = {
  icon: PropTypes.any
};

const styles = StyleSheet.create({
  icon: {
    width: sizeWidth(7.2),
    height: sizeWidth(7.2)
  },
  item: {
    justifyContent: 'flex-end',
    marginTop: sizeWidth(2)
  }
});
