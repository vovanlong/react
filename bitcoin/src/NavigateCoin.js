import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './screen/Home';
import Settings from './screen/Setting';

import bitcoin from './res/image/bitcoin.png';
import github from './res/image/github-sign.png';

import TabMenuIcon from './component/TabMenuIcon';

type Props = {};

class NavigateCoin extends Component {
  render() {
    return <AppStackNavigator />;
  }
}

export default NavigateCoin;

const AppStackNavigator = createBottomTabNavigator(
  {
    Home: {
        screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => {
          return <TabMenuIcon icon={github} active={focused} />;
        }
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => {
          return <TabMenuIcon icon={bitcoin} active={focused} />;
        }
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: '#E8175D'
      },
      showIcon: true,
      showLabel: true,
      tabStyle: {
        alignItems: 'center'
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
