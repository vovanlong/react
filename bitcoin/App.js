import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './src/screen/Home';
import Settings from './src/screen/Setting';

import bitcoin from './src/res/image/bitcoin.png';
import github from './src/res/image/github-sign.png';

import TabMenuIcon from './src/component/TabMenuIcon';
type Props = {};

export default createBottomTabNavigator(
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
